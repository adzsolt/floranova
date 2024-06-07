<?php

namespace App\Http\Controllers;

use App\Models\HeatUnit;
use App\Models\Temperature;
use App\Models\Work;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;

class TemperatureController extends Controller
{

    public function addTemperature($work_date, $heat_unit_id, $outside_temperature, $daytime_temperature, $night_temperature, $input = null)
    {
        $temperature = new Temperature();

        $temperature->work_date = $work_date;
        $temperature->heat_unit_id = $heat_unit_id;
        $temperature->outside_temperature = $outside_temperature ;
        $temperature->daytime_temperature = $daytime_temperature;
        $temperature->night_temperature = $night_temperature ;

        if (isset($input)) {
            $temperature->input = $input;
        }
        $temperature->save();

        return $temperature;
    }
    public function getTemperatures(Request $request)
    {
        $data = $request->all();

        //dd($data);

        if(isset($data['heat_unit_id'])) {
            $heat_unit = HeatUnit::where('id', $data['heat_unit_id'])->first();
        }
        else{
            $heat_unit = HeatUnit::first();
        }

        //dd($data['heat_unit_id']);

        $heat_units = HeatUnit::all();


        $temperatures = Temperature::whereHas('heatUnit', function ($query) use($heat_unit) {
            return $query->where('id', '=', $heat_unit->id);
        })->where('work_date', '>=', $data['start_date'])->where('work_date', '<=', $data['end_date'])->orderBy('work_date', 'desc')->get();

        return response()->json(['temperatures' => $temperatures, 'heat_units' => $heat_units, 'first_heat_unit_id' => $heat_unit->id]);
    }

    public function getTemperature(Request $request)
    {
        $data = $request->all();

        $heat_unit = HeatUnit::where('id', $data['heat_unit_id'])->first;

        $temperatures = Temperature::whereHas('heatUnit', function ($query) use($heat_unit) {
            return $query->where('id', '>=', $heat_unit->id);
        })->where('work_date', '>=', $data['start_date'])->where('work_date', '<=', $data['end_date'])->get();

        return response()->json(['temperatures' => $temperatures]);
    }

    public function addPeriodInput(Request $request)
    {
        $data = $request->all();


        /*$data['work_date'] = '2024-01-13';
        $data['heat_unit_id'] = 1;
        $data['daytime_temperature'] = 12;
        $data['night_temperature'] = 2;
        $data['input'] = 'input';*/


        $heat_units = HeatUnit::all();

        foreach ($heat_units as $heat_unit) {
            $check_heat_unit_temperature = Temperature::where('heat_unit_id', $heat_unit->id)->where('input', 'input')->first();

            if(!$check_heat_unit_temperature){
                $this->addTemperature('2023-10-01', $heat_unit->id,0,0,0,$input = 'input' );
            }
        }



        /*else{

        }*/
        $temperature = Temperature::whereNotNull('input')->where('heat_unit_id', $data['heat_unit_id'])->orderBy('work_date')->get();
        //dd($temperature->last()->work_date);

        $last_input = Carbon::parse($temperature->last()->work_date);

        $start = $last_input->addDay();
        $end = Carbon::parse($data['work_date']);

       //dd($temperature->last()->work_date, $data['work_date']);
        $period_of_dates = CarbonPeriod::create($start, $end);
        $period = $period_of_dates->toArray();
        foreach ($period as $date) {;
            dump($date->format('Y-m-d'));
            if( $data['work_date'] == $date->format('Y-m-d')  ) {

                $this->addTemperature($date->format('Y-m-d'), $data['heat_unit_id'], $data['outside_temperature'],$data['daytime_temperature'], $data['night_temperature'], 'input',);
            }
            else{
                $this->addTemperature($date->format('Y-m-d'), $data['heat_unit_id'],$data['outside_temperature'], $data['daytime_temperature'], $data['night_temperature'],);
            }
        }

        return response()->json(['success']);
    }

    public function deleteTemperature(Request $request)
    {
        $data = $request->all();

       /* $data['id'] = 342;*/

        $temperature = Temperature::where('id', $data['id'])->first();

        $last_temperatures = Temperature::where('heat_unit_id', $temperature->heat_unit_id)->where('input', 'input')->orderBy('work_date', 'desc')->get();
        $temperatures = Temperature::where('heat_unit_id', $temperature->heat_unit_id)->orderBy('work_date', 'desc')->get();


        foreach ($temperatures as $temp) {
            //dd($last_temperatures[1]->work_date, $temp->work_date);
           if($temp->work_date > $last_temperatures[1]->work_date){
               $temp->delete();
           }
        }

        return 'success';

    }
}
