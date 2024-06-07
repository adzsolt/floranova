<?php

namespace App\Http\Controllers;

use App\Models\Spend;
use App\Models\Work;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;

class SpendController extends Controller
{
    public function getSpends(Request $request)
    {
        $data = $request->all();
        $spends = Spend::where('work_date', '>=', $data['start_date'])->where('work_date', '<=', $data['end_date'])->orderBy('work_date', 'desc')->get();

        if ($spends) {
            return response()->json(['spends' => $spends]);
        } else {
            return response()->json(['status' => 'error']);
        }
    }

    public function addSpend($work_date, $spent_gas, $spent_electricity, $spent_gas_period_input, $spent_electricity_period_input)
    {
        $spend = Spend::where('work_date', $work_date)->first();

        if (!isset($spend)) {

            $spend = new Spend();

            $spend->work_date = $work_date;
        }

        if (isset($spent_gas)) {
            $spend->spent_gas = $spent_gas;
        }

        if (isset($spent_electricity)) {
            $spend->spent_electricity = $spent_electricity;
        }

        if (isset($spent_gas_period_input)) {
            $spend->spent_gas_period_input = $spent_gas_period_input;
        }

        if (isset($spent_electricity_period_input)) {
            $spend->spent_electricity_period_input = $spent_electricity_period_input;
        }
        $spend->save();

        return $spend;
    }

    public function addSpendPeriodInput(Request $request)
    {
        $data = $request->all();

        /*$data['work_date'] = '2024-01-18';
        $data['spent_gas_period_input'] = 5000;
        $data['spent_electricity_period_input'] = 10000;*/

        $spends_gas = Spend::whereNotNull('spent_gas_period_input')->orderBy('work_date')->get();


        if (!count($spends_gas)) {
            $this->addSpend('2023-10-01', 1, 1, 1, 1);
        }
        /*else{

        }*/

        if (isset($data['spent_gas_period_input'])) {
            $spends_gas = Spend::whereNotNull('spent_gas_period_input')->orderBy('work_date')->get();
            //dd($works->last()->work_date);

            $last_input_gas = Carbon::parse($spends_gas->last()->work_date);

            $start_gas = $last_input_gas->addDay();
            $end_gas = Carbon::parse($data['work_date']);

            $diff = $start_gas->diffInDays($end_gas) + 1;

            $gas_spend_per_day = $data['spent_gas_period_input'] / $diff;

            $period = CarbonPeriod::create($start_gas, $end_gas);


            foreach ($period as $date) {
                if ($data['work_date'] == $date->format('Y-m-d')) {
                    $this->addSpend($date->format('Y-m-d'), $gas_spend_per_day, null, $data['spent_gas_period_input'], null);
                } else {
                    $this->addSpend($date->format('Y-m-d'), $gas_spend_per_day, null, null, null);
                }
            }
        }

        if (isset($data['spent_electricity_period_input'])) {
            $spends_electricity = Spend::whereNotNull('spent_electricity_period_input')->orderBy('work_date')->get();
            //dd($works->last()->work_date);

            $last_input_electricity = Carbon::parse($spends_electricity->last()->work_date);

            $start_electricity = $last_input_electricity->addDay();
            $end_electricity = Carbon::parse($data['work_date']);

            $diff = $start_electricity->diffInDays($end_electricity) + 1;

            $electricity_spend_per_day = $data['spent_electricity_period_input'] / $diff;

            $period = CarbonPeriod::create($start_electricity, $end_electricity);


            foreach ($period as $date) {

                if ($data['work_date'] == $date->format('Y-m-d')) {
                    $this->addSpend($date->format('Y-m-d'), null, $electricity_spend_per_day, null, $data['spent_electricity_period_input']);
                } else {
                    $this->addSpend($date->format('Y-m-d'), null, $electricity_spend_per_day, null, null);
                }
            }
        }


        return response()->json(['success']);
    }


    public function deleteSpend(Request $request)
    {
         $data = $request->all();

        /* $data['id'] = 342;*/

        $spend = Spend::where('id', $data['id'])->first();
        //$spend = Spend::where('id', 312)->first();

        $last_spends_gas = Spend::where(function ($query) {
            $query->where('spent_gas_period_input', '!=', null);
        })->orderBy('work_date', 'desc')->get();


        $last_spends_electricity = Spend::where(function ($query) {
            $query->where('spent_electricity_period_input', '!=', null);
        })->orderBy('work_date', 'desc')->get();


        //dd($last_spends[1]);
        $spends = Spend::orderBy('work_date', 'desc')->get();


        if (isset($spend->spent_gas_period_input) and isset($spend->spent_electricity_period_input)) {
            foreach ($spends as $sp) {


                if ($sp->work_date > $last_spends_gas[1]->work_date) {
                    $sp->spent_gas = null;
                    $sp->save();
                }

                if ($sp->work_date > $last_spends_electricity[1]->work_date) {
                    $sp->spent_electricity = null;
                    $sp->save();
                }

                if (!$sp->spent_gas and !$sp->spent_electricity) {
                    $sp->delete();
                }
            }

        } elseif (isset($spend->spent_gas_period_input) and !isset($spend->spent_electricity_period_input)) {
            foreach ($spends as $sp) {


                if ($sp->work_date > $last_spends_gas[1]->work_date) {
                    $sp->spent_gas = null;
                    $sp->save();
                }


                if (!$sp->spent_gas and !$sp->spent_electricity) {
                    $sp->delete();
                }
            }
        }

        elseif (!isset($spend->spent_gas_period_input) and isset($spend->spent_electricity_period_input)) {
            foreach ($spends as $sp) {


                if ($sp->work_date > $last_spends_electricity[1]->work_date) {
                    $sp->spent_electricity = null;
                    $sp->save();
                }

                if (!$sp->spent_gas and !$sp->spent_electricity) {
                    $sp->delete();
                }
            }
        }

        return 'success';

    }

}
