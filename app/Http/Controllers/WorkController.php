<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\Work;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isEmpty;
use DateTime;
class WorkController extends Controller
{
    public function addWork($work_date, $spend, $period_input, $business_id)
    {
        $work = new Work();

        $work->work_date = $work_date;
        $work->spend = $spend;
        if (isset($period_input)) {
            $work->period_input = $period_input;
        }
        $work->business_id = $business_id;
        $work->save();
    }

    public function addPeriodInput(Request $request)
    {
        $data = $request->all();

        /*$data['work_date'] = '2024-01-13';
        $data['period_input'] = 5000;*/

        $works = Work::whereNotNull('period_input')->where('business_id', $data['business_id'])->orderBy('work_date')->get();


        if(!count($works)){
            $this->addWork('2023-10-01', 0,0, $data['business_id'] );
        }
        /*else{

        }*/
        $works = Work::whereNotNull('period_input')->where('business_id', $data['business_id'])->orderBy('work_date')->get();
        //dd($works->last()->work_date);

        $last_input = Carbon::parse($works->last()->work_date);

        $start = $last_input->addDay();
        $end = Carbon::parse($data['work_date']);

        $diff = $start->diffInDays($end)+1;

        $spend_per_day = $data['period_input'] / $diff;

        $period = CarbonPeriod::create($start, $end);


        foreach ($period as $date) {

            $new_work = new Work();
            $new_work->work_date = $date->format('Y-m-d');
            $new_work->spend = $spend_per_day;
            $new_work->business_id = $data['business_id'];
            if($data['work_date'] == $date->format('Y-m-d')){
                $new_work->period_input = $data['period_input'];
            }

            $new_work->save();
            //echo $date->format('Y-m-d')."/";
        }

        return response()->json(['success']);
    }

    public function getWorksSpend(Request $request)
    {
        $data = $request->all();

        if(!isset($data['business_id'])){
            $data['business_id'] = Business::first()->id;
        }
        $works = Work::where('work_date', '>=', $data['start_date'])->where('work_date', '<=', $data['end_date'])->where('business_id', $data['business_id'])->orderBy('work_date', 'desc')->get();

        if ($works) {
            return response()->json(['works' => $works]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function deleteWork(Request $request)
    {
        /*$data = $request->all();
        $work = Work::where('id', $data['id'])->first();*/
        $data = $request->all();
        $last_works = Work::where(function ($query) {
            $query->where('period_input', '!=', null);
        })->where('business_id', $data['business_id'])->orderBy('work_date', 'desc')->get();


        $works = Work::where('business_id', $data['business_id'])->orderBy('work_date', 'desc')->get();


        foreach ($works as $one_work) {
            //dd($last_temperatures[1]->work_date, $temp->work_date);
            if($one_work->work_date > $last_works[1]->work_date){
                $one_work->delete();
            }
        }

        return 'success';

    }
}
