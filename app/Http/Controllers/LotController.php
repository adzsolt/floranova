<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\Fertilizer;
use App\Models\FertilizerStatus;
use App\Models\HeatUnit;
use App\Models\Layout;
use App\Models\Lot;
use App\Models\LotStatus;
use App\Models\Peat;
use App\Models\Plant;
use App\Models\Pot;
use App\Models\ProductionUnit;
use App\Models\Season;
use App\Models\Spend;
use App\Models\Work;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use GuzzleHttp\Client;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class LotController extends Controller
{

    public function getLots()
    {
        $lots = Lot::orderBy('start_date', 'desc')->get();
        foreach ($lots as $key => $lot) {


            $lots[$key]['statuses'] = $lot->statuses;
            foreach ($lot->statuses as $key1 => $status) {
                //dd($status->productionUnit);
                $lots[$key]['statuses'][$key1]['production_unit_name'] = $status->productionUnit->name;
                $lots[$key]['statuses'][$key1]['layout_name'] = $status->layout->name;
            }
            $lots[$key]['peat_name'] = $lot->peat->name;
            $lots[$key]['pot_name'] = $lot->pot->name;
            $lots[$key]['plant_name'] = $lot->plant->name;
            $lots[$key]['season_name'] = $lot->season->name;
            $lots[$key]['production_unit_name'] = $lot->productionUnit->name;
            $lots[$key]['layout_name'] = $lot->layout->name;
            $lots[$key]['fertilizer_name'] = $lot->fertilizer->name;

            //dd($lots[$key]['statuses']);

        }
        return response()->json(['lots' => $lots]);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $lot = new Lot();

        $lot->name = $data['name'];
        $lot->quantity = $data['quantity'];
        $lot->start_date = $data['start_date'];
        $lot->peat_id = $data['peat_id'];
        $lot->pot_id = $data['pot_id'];
        $lot->plant_id = $data['plant_id'];
        $lot->season_id = $data['season_id'];
        $lot->production_unit_id = $data['production_unit_id'];
        $lot->layout_id = $data['layout_id'];
        $lot->fertilizer_id = $data['fertilizer_id'];
        $lot->fertilizer_volume = $data['fertilizer_volume'];

        $plant = Plant::where('id', $data['plant_id'])->first();
        $lot->plant_price = round($plant->price, 2);

        $lot->save();


        $lot_status = new LotStatus();
        $lot_status->start_date = $data['start_date'];
        $lot_status->production_unit_id = $data['production_unit_id'];
        $lot_status->layout_id = $data['layout_id'];
        $lot_status->lot_id = $lot->id;

        $lot_status->save();


        $fertilizer = Fertilizer::where('id', $data['fertilizer_id'])->first();
        $pot = Pot::where('id', $data['pot_id'])->first();

        $fertilizer_lot_volume = $data['quantity'] * $pot->size * $data['fertilizer_volume'] / 1000;

        $fertilizer->provision = $fertilizer->provision - $fertilizer_lot_volume;

        $fertilizer->save();


        $fertilizer_status = new FertilizerStatus();

        $fertilizer_status->fertilizer_id = $fertilizer->id;
        $fertilizer_status->action = 'Használat';
        $fertilizer_status->lot_id = $lot->id;
        $fertilizer_status->volume = $fertilizer_lot_volume;
        $fertilizer_status->action_date = $data['start_date'];

        $fertilizer_status->save();

        return response()->json(['status' => 'success']);

    }

    public function getLotFormData(Request $request)
    {
        $data_from_request = $request->all();

        $lot = Lot::where('id', $data_from_request['lot_id'])->first();

        if (isset($lot)) {
            $business_id = $lot->statuses[0]->productionUnit->heatUnit->business->id;
        }

        $data = [];
        $data['peats'] = Peat::all();
        $data['pots'] = Pot::all();
        $data['plants'] = Plant::all();
        $data['seasons'] = Season::all();
        if (isset($lot)) {
            $data['production_units'] = ProductionUnit::whereHas('heatUnit', function ($p) use ($business_id) {
                $p->whereHas('business', function ($r) use ($business_id) {
                    return $r->where('id', $business_id);
                });
            })->get();
        } else {
            $data['production_units'] = ProductionUnit::all();
        }
        $data['layouts'] = Layout::all();
        $data['fertilizers'] = Fertilizer::all();


        return response()->json(['data' => $data]);
    }

    public function delete(Request $request)
    {
        $data = $request->all();
        /* $data = [];
         $data['lot_id'] = 5;*/
        $lot = Lot::where('id', $data['id'])->first();
        $fertilizer_lot_volume = 0;

        if ($lot) {
            $lot_statuses = $lot->statuses;
            foreach ($lot_statuses as $lot_status) {
                $lot_status->delete();
            }
            $fertilizer_statuses = FertilizerStatus::where('lot_id', $lot->id)->get();
            foreach ($fertilizer_statuses as $fertilizer_status) {
                $fertilizer_status->delete();
            }

            $fertilizer_lot_volume = $lot->quantity * $lot->pot->size * $lot->fertilizer_volume / 1000;
        }


        $fertilizer = Fertilizer::where('id', $lot->fertilizer_id)->first();
        $fertilizer->provision = $fertilizer->provision + $fertilizer_lot_volume;

        $fertilizer->save();


        $lot->delete();

        return response('Success');

    }


    public function getPrice(Request $request)
    {

        $data = $request->all();
        $id = $data['lot_id'];


        $start = $data['start_date'];
        $end = $data['end_date'];


        $lot = Lot::where('id', $id)->first();

        $lot_end_date_carbon = Carbon::parse($lot->end_date);
        $lot_start_date_carbon = Carbon::parse($lot->start_date);


        //dd($start, $end);

        $data['lot_name'] = $lot->name;

        $data['plant'] = $lot->plant_price;
        $price = $data['plant'];

        $data['peat_price'] = $this->getPeatPrice($lot);
        $price = $price + $data['peat_price'];

        $data['pot_price'] = $this->getPotPrice($lot);
        $price = $price + $data['pot_price'];

        $data['fertilizer_price'] = $this->getFertilizerPrice($lot, $start, $end);
        $price = $price + $data['fertilizer_price'];

        $data['work_price'] = $this->getWorkPrice($lot, $start, $end);
        $price = $price + $data['work_price'];


        $data['spend_price'] = $this->getSpendPrice($lot, $start, $end);
        $price = $price + $data['spend_price'];

        $data['total_price'] = $price;

        $data['lot_quantity'] = $lot->quantity;

        return response()->json($data);
    }

    public function getPeatPrice($lot)
    {
        $pot = $lot->pot;
        $peat = $lot->peat;

        $peat_price = $pot->size * $peat->price / 1000;

        return $peat_price;

    }

    public function getPotPrice($lot)
    {
        $pot = $lot->pot;

        return $pot->price;

    }

    public function getFertilizerPrice($lot, $start, $end)
    {
        $fertilizer_price = 0;
        $fertilizer_price_1 = 0;

        //$lot = Lot::where('id', $lot)->first();

        $business_id = $lot->productionUnit->heatUnit->business_id;

        $carbon_lot_start = Carbon::parse($lot->start_date);
        $carbon_lot_end = Carbon::parse($lot->end_date);

        $fertilezer_statuses_1 = FertilizerStatus::where('lot_id', $lot->id)->where('action_date', '>=', $start)->where('action_date', '<=', $end)->where('action', 'Használat')->
        where('business_id', $business_id)->get();

        foreach ($fertilezer_statuses_1 as $fertilezer_status) {

            $fertilizer_price_1 = $fertilizer_price_1 + ($fertilezer_status->volume * $fertilezer_status->fertilizer->price);
        }


        $fertilezer_statuses = FertilizerStatus::where('action_date', '>=', $start)->where('action_date', '<=', $end)->where('action', 'All')->where('business_id', $business_id)->get();

        // dd($start, $end, $lot,$fertilezer_statuses);

        foreach ($fertilezer_statuses as $fertilezer_status) {

            $total_used_space = $this->getTotalUsedSpace($business_id, $fertilezer_status->action_date);
            $total_lot_space = $this->getTotalLotSpace($lot, $fertilezer_status->action_date);

            Log::info('FERTILIZER');
            Log::info($lot->id);
            Log::info($fertilezer_status->action_date);
            Log::info($total_used_space['total_used_space']);
            Log::info($total_lot_space['total_lot_space']);
            Log::info($fertilezer_status->volume);
            Log::info($fertilezer_status->fertilizer->price);



            $fertilizer_price = $fertilizer_price + $fertilezer_status->volume * $fertilezer_status->fertilizer->price / $total_used_space['total_used_space'] * $total_lot_space['total_lot_space'];
            //dump($fertilezer_status->action_date, $lot->id, $fertilizer_price, $total_used_space);

            Log::info('Fertilezer_price: '.$fertilizer_price);
        }

        $fertilizer_price_sum = ($fertilizer_price + $fertilizer_price_1) / $lot->quantity;

        //dd($fertilezer_statuses, $fertilizer_price, $fertilizer_price_1, $total_used_space['total_used_space'], $total_lot_space['total_lot_space']);
        return $fertilizer_price_sum;
    }

///////////////////////Work
    public function getWorkPrice($lot, $start, $end)
    {
        $work_price = 0;
        //$lot = Lot::where('id', 9)->first();

        $business_id = $lot->productionUnit->heatUnit->business_id;
        $period = CarbonPeriod::create($start, $end);

        $carbon_lot_start = Carbon::parse($lot->start_date);
        $carbon_lot_end = Carbon::parse($lot->end_date);

        //dd($business_id, $start, $end);
        foreach ($period as $date) {

            if ($carbon_lot_start <= $date and $date <= $carbon_lot_end) {
                // dump($date);
                $work = null;
                $total_used_space = 0;
                $total_lot_space = 0;
                $work = Work::where('work_date', $date)->where('business_id', $business_id)->first();
                $work_spend = $work->spend;
                //dd($work_spend);
                $total_used_space = $this->getTotalUsedSpace($business_id, $date);
                Log::info('TOTAL USED SPACE ON ' . $date . ':' . $total_used_space['total_used_space']);
                $total_lot_space = $this->getTotalLotSpace($lot, $date);
                if ($work_spend and $total_used_space['total_used_space']) {
                    //dump($date->format('Y-m-d'), 'work_spend ', $work_spend, 'total_used', $total_used_space['total_used_space'], 'total_lot',$total_lot_space['total_lot_space'],
                    //  'price',($work_spend / $total_used_space['total_used_space']) * $total_lot_space['total_lot_space']);
                    $work_price = $work_price + ($work_spend / $total_used_space['total_used_space']) * $total_lot_space['total_lot_space'];
                    //dump($work_price);
                }
            }
        }

        //dd($work_price);
        return $work_price / $lot->quantity;
    }

    public function getTotalSpace($business_id)
    {
        /*$lots = Lot::whereHas('productionUnit', function ($q) use ($business_id) {
            $q->whereHas('heatUnit', function ($p) use ($business_id) {
                $p->whereHas('business', function ($r) use ($business_id) {
                    return $r->where('id', $business_id);
                });
            });
        })->get();*/

        $area = 0;

        $production_units = ProductionUnit::whereHas('heatUnit', function ($p) use ($business_id) {
            $p->whereHas('business', function ($r) use ($business_id) {
                return $r->where('id', $business_id);
            });
        })->get();

        foreach ($production_units as $production_unit) {
            $area = $area + $production_unit->length * $production_unit->width;
        }

        return $area;
    }

    public function getTotalUsedSpace($business_id, $date)
    {
        $total_used_space = 0;
        $lot_names = [];
        $lot_statuses = [];
        $dates = [];

        $lots = Lot::whereHas('productionUnit', function ($q) use ($business_id) {
            $q->whereHas('heatUnit', function ($p) use ($business_id) {
                $p->whereHas('business', function ($r) use ($business_id) {
                    return $r->where('id', $business_id);
                });
            });
        })->get();

        //dd($lots);

        $date = Carbon::parse($date);

        foreach ($lots as $lot) {
            $carbon_start_date = Carbon::parse($lot->start_date);
            $carbon_end_date = Carbon::parse($lot->end_date);
            //dump($carbon_start_date, $carbon_end_date, $date);
            if ($carbon_start_date <= $date and ($carbon_end_date >= $date or !$lot->end_date)) {
                $lot_names[] = $lot->name;
                $statuses = $lot->statuses()->orderBy('start_date')->get();
                //dd($statuses);
                $current_status_key = $statuses->reverse()->keys()->first();
                $best_date = '2030-01-01';
                foreach ($statuses as $status_key => $status) {
                    if ($status->start_date > $date) {
                        continue;
                    } else {
                        $current_status_key = $status_key;
                        $best_date = $status->start_date;
                        break;


                    }

                }
                $lot_statuses[] = $statuses[$current_status_key]->layout->pot_per_m2;
                $dates[] = $best_date;
                $total_used_space = $total_used_space + $lot->quantity / $statuses[$current_status_key]->layout->pot_per_m2;


                //dump($date, $lot->name);
            }
        }
        //dump($lot_statuses);
        $data['lot_names'] = $lot_names;
        $data['lot_statuses'] = $lot_statuses;
        $data['dates'] = $dates;
        $data['total_used_space'] = $total_used_space;
        //dump($dates);
        return $data;
    }

    public function getTotalUsedSpaceHeatUnit($heat_unit_id, $date)
    {
        $total_used_space = 0;
        $lot_names = [];
        $lot_statuses = [];
        $dates = [];

        $heat_unit = HeatUnit::where('id', $heat_unit_id)->first();

        $business_id = $heat_unit->business->id;

        /*$lots = Lot::whereHas('productionUnit', function ($q) use ($heat_unit_id) {
            $q->whereHas('heatUnit', function ($p) use ($heat_unit_id) {
                    return $p->where('id', $heat_unit_id);
                });
        })->get();*/

        $lots = Lot::whereHas('productionUnit', function ($q) use ($business_id) {
            $q->whereHas('heatUnit', function ($p) use ($business_id) {
                $p->whereHas('business', function ($r) use ($business_id) {
                    return $r->where('id', $business_id);
                });
            });
        })->get();

        //dd($lots);

        foreach ($lots as $lot) {
            if ($lot->start_date <= $date and ($lot->end_date >= $date or !$lot->end_date)) {
                $lot_names[] = $lot->name;
                $statuses = $lot->statuses()->orderBy('start_date')->get();
                //dd($statuses);
                $current_status_key = $statuses->reverse()->keys()->first();
                $best_date = '2050-01-01';
                foreach ($statuses as $status_key => $status) {
                    if ($status->start_date > $date) {
                        continue;
                    } else {
                        $current_status_key = $status_key;
                        $best_date = $status->start_date;
                        break;


                    }

                }
                $currentHeatUnitId = $statuses[$current_status_key]->productionUnit->heatUnit->id;

                if ($currentHeatUnitId == $heat_unit_id) {
                    $lot_statuses[] = $statuses[$current_status_key]->layout->pot_per_m2;
                    $dates[] = $best_date;
                    $total_used_space = $total_used_space + $lot->quantity / $statuses[$current_status_key]->layout->pot_per_m2;
                }

                //dump($date, $lot->name);
            }
        }
        //dump($lot_statuses);
        $data['lot_names'] = $lot_names;
        $data['lot_statuses'] = $lot_statuses;
        $data['dates'] = $dates;
        $data['total_used_space'] = $total_used_space;
        //dump($dates);
        return $data;
    }

    public function getTotalUsedSpaceProductionUnit($production_unit_id, $date)
    {
        $total_used_space = 0;
        $lot_names = [];
        $lot_statuses = [];
        $dates = [];

        $productionUnit = ProductionUnit::where('id', $production_unit_id)->first();

        $business_id = $productionUnit->heatUnit->business->id;


        //$lots = Lot::where('production_unit_id', $production_unit_id)->get();

        $lots = Lot::whereHas('productionUnit', function ($q) use ($business_id) {
            $q->whereHas('heatUnit', function ($p) use ($business_id) {
                $p->whereHas('business', function ($r) use ($business_id) {
                    return $r->where('id', $business_id);
                });
            });
        })->get();

        //dd($lots);

        foreach ($lots as $lot) {
            if ($lot->start_date <= $date and ($lot->end_date >= $date or !$lot->end_date)) {
                $lot_names[] = $lot->name;
                $statuses = $lot->statuses()->orderBy('start_date')->get();
                //dd($statuses);
                $current_status_key = $statuses->reverse()->keys()->first();
                $best_date = '2030-01-01';
                foreach ($statuses as $status_key => $status) {
                    if ($status->start_date > $date) {
                        continue;
                    } else {
                        $current_status_key = $status_key;
                        $best_date = $status->start_date;
                        break;


                    }

                }

                $currentProductionUnitId = $statuses[$current_status_key]->productionUnit->id;

                if ($currentProductionUnitId == $production_unit_id) {
                    $lot_statuses[] = $statuses[$current_status_key]->layout->pot_per_m2;
                    $dates[] = $best_date;
                    $total_used_space = $total_used_space + $lot->quantity / $statuses[$current_status_key]->layout->pot_per_m2;
                }

                //dump($date, $lot->name);
            }
        }
        //dump($lot_statuses);
        $data['lot_names'] = $lot_names;
        $data['lot_statuses'] = $lot_statuses;
        $data['dates'] = $dates;
        $data['total_used_space'] = $total_used_space;
        //dump($dates);
        return $data;
    }

    public function getTotalLotSpace($lot, $date)
    {
        ///$lot = Lot::where('id', $lot_id)->first();

        $statuses = $lot->statuses()->orderBy('start_date')->get();
        //dd($statuses);
        $current_status_key = $statuses->reverse()->keys()->first();
        $best_date = '2030-01-01';
        foreach ($statuses as $status_key => $status) {
            if ($status->start_date > $date) {
                continue;
            } else {
                $current_status_key = $status_key;
                $best_date = $status->start_date;
                break;

            }

        }

        $current_pot_per_m2 = $statuses[$current_status_key]->layout->pot_per_m2;

        $data['total_lot_space'] = $lot->quantity / $current_pot_per_m2;

        Log::info('TOTAL LOT SPACE ON ' . $date . ':' . $data['total_lot_space']);
        $data['pot_per_m2'] = $current_pot_per_m2;
        $data['best_date'] = $best_date;
        return $data;

    }

//////////////////////////////////////Temperature
    public function getHeatUnitArea($heat_unit)
    {
        $heat_unit_area = 0;

        foreach ($heat_unit->productionUnits as $production_unit) {
            $heat_unit_area = $heat_unit_area + $production_unit->width * $production_unit->length;
        }

        return $heat_unit_area;
    }


    public function getHeatUnitTemperatureIndex($heat_unit, $date)
    {

        $temperature = $heat_unit->temperatures->where('work_date', $date)->first();

        //$inside_temperature_average = ($temperature->daytime_temperature + $temperature->night_temperature) / 2;

        //dd($heat_unit->name, $temperature);
        return $temperature->outside_temperature;
    }

    public function getHeatUnitSpendPerDate($heat_unit, $heat_units, $date)
    {

        $heat_units_area = [];

        // dd($date);
        //$heat_unit_area = $this->getHeatUnitArea($heat_unit);

        $spend = Spend::where('work_date', $date)->where('business_id', $heat_unit->business->id)->first();
        Log::info('                                                                  ');
        Log::info('------------------------------------------------------------------');
        Log::info('                                                                  ');
        $total_index = 0;
        foreach ($heat_units as $one_heat_unit) {

            Log::info('Date:' . $date);
            Log::info('heat_unit_name:' . $one_heat_unit->name . ', heat_unit_id:' . $one_heat_unit->id);

            if ($this->notEmptyHeatUnit($one_heat_unit, $date)) {
                $heat_units_area[$one_heat_unit->id]['area'] = $this->getHeatUnitArea($one_heat_unit);
            } else {
                $heat_units_area[$one_heat_unit->id]['area'] = 0;
            }
            Log::info('heat_unit_area:' . $heat_units_area[$one_heat_unit->id]['area']);
            $heat_units_area[$one_heat_unit->id]['temperature_index'] = $this->getHeatUnitTemperatureIndex($one_heat_unit, $date);
            Log::info('temperature_index:' . $heat_units_area[$one_heat_unit->id]['temperature_index']);
            $heat_units_area[$one_heat_unit->id]['total_index'] = abs($heat_units_area[$one_heat_unit->id]['area'] * $heat_units_area[$one_heat_unit->id]['temperature_index']);
            Log::info('one_total_index:' . $heat_units_area[$one_heat_unit->id]['total_index']);
            $total_index = $total_index + $heat_units_area[$one_heat_unit->id]['total_index'];
            Log::info('current_total_index:' . $total_index);
            Log::info('************************************************************************');
        }

        $spend_per_unit = 0;

        if ($total_index) {
            $spend_per_unit = ($spend->spent_gas + $spend->spent_electricity) / $total_index;
        }
        Log::info('spend_per_unit:' . $spend_per_unit);
        Log::info('one_day_spend:' . $heat_units_area[$heat_unit->id]['total_index'] * $spend_per_unit);
        //dd($heat_units_area[$heat_unit->id]['total_index'] * $spend_per_unit);
        return $heat_units_area[$heat_unit->id]['total_index'] * $spend_per_unit;


        //dd($heat_unit->id,$heat_unit->name, $heat_unit_area, $heat_units_area, $total_index, $spend->spent_gas, $heat_units_area[$heat_unit->id]['total_index'] * $spend_per_unit);
    }


    public function getSpendPrice($lot, $start, $end)
    {

        // $lot = Lot::where('id', $id)->first();

        Log::info('Lot _______________ :' . $lot->name);

        $total_spend = 0;


        //$this->getHeatUnitSpendPerDate($heat_unit, $heat_units, $date);

        $period = CarbonPeriod::create($start, $end);
        // dd($period);
        $statuses = $lot->statuses()->orderBy('start_date')->get();

        $carbon_lot_start = Carbon::parse($lot->start_date);
        $carbon_lot_end = Carbon::parse($lot->end_date);

        foreach ($period as $date) {

            //dump( $carbon_lot_start <= $date and ($date <= $carbon_lot_end or $lot->end_date == null) );
            if ($carbon_lot_start <= $date and ($date <= $carbon_lot_end or $lot->end_date == null)) {
                $current_status_key = $statuses->reverse()->keys()->first();
                foreach ($statuses as $status_key => $status) {
                    if ($status->start_date > $date) {
                        continue;
                    } else {
                        $current_status_key = $status_key;

                        break;

                    }

                }


                $heat_unit = $statuses[$current_status_key]->productionUnit->heatUnit;

                $business = $heat_unit->business;

                $heat_units = HeatUnit::where('business_id', $business->id)->get();

                $heatUnitSpendPerDate = $this->getHeatUnitSpendPerDate($heat_unit, $heat_units, $date->format('Y-m-d'));
                $heatUnitTotalM2PerDate = $this->getHeatUnitTotalM2SpecificDay($heat_unit->id, $date);
                Log::info('Heat Unit Total M2 On ' . $date . ':' . $heatUnitTotalM2PerDate);

                if ($heatUnitTotalM2PerDate == 0) {
                    $m2_spend_per_day = 0;
                } else {
                    $m2_spend_per_day = $heatUnitSpendPerDate / $heatUnitTotalM2PerDate;
                }
                Log::info('SPENDING PER M2 PER DATE: ' . $m2_spend_per_day);
                Log::info('IN BASE FUNCTION');
                $total_lot_space_m2 = $this->getTotalLotSpace($lot, $date);

                $spend_lot_in_m2_per_date = $m2_spend_per_day;
                $pot_per_m2 = $total_lot_space_m2['pot_per_m2'];
                Log::info('POT PER M2: ' . $pot_per_m2);
                $spend_per_lot_plant = $spend_lot_in_m2_per_date / $pot_per_m2;
                Log::info('SPENDING PER PLANT: ' . $spend_per_lot_plant);
                $total_spend = $total_spend + $spend_per_lot_plant;
                Log::info('CURRENT TOTAL SPEND: ' . $total_spend);

            }
        }

        return $total_spend;

    }

    /**
     * @param $heat_unit
     * @param $date
     * @return array
     * $data['total_m2'] and $data['lot_m2']
     */
    public function getHeatUnitTotalM2SpecificDay($heat_unit_id, $date)
    {
        $lots = LotStatus::whereHas('productionUnit', function ($query) use ($heat_unit_id) {
            $query->whereHas('heatUnit', function ($q) use ($heat_unit_id) {
                $q->where('id', '=', $heat_unit_id);
            });
        })->get()->groupBy('lot_id');

        $sorted_lots = [];

        foreach ($lots as $key => $lot) {
            $sorted_lots[] = $lot->sortByDesc('start_date');
        }

        $current_lot_statuses = [];

        //calculating if anytime the lot was in heat_unit
        foreach ($sorted_lots as $lot_collection) {
            foreach ($lot_collection as $lot_status) {
                $start = Carbon::parse($lot_status->start_date);

                if (isset($lot_status->lot->end_date)) {
                    $end = Carbon::parse($lot_status->lot->end_date);
                }
                $date_calculated = Carbon::parse($date);
                //dd($lot_status);

                if (isset($lot_status->lot->end_date)) {
                    if ($start <= $date_calculated and $date_calculated <= $end) {
                        $current_lot_statuses[] = $lot_status;
                        break;
                    }
                } else {
                    if ($start <= $date_calculated /*and $date_calculated <= $end*/) {
                        $current_lot_statuses[] = $lot_status;
                        break;
                    }
                }
            }
        }
        //calculating if  the lot was moved in another heat_unit
        $heat_unit_used_area = 0;

        foreach ($current_lot_statuses as $current_lot_status) {
            $lot_status_different_heat_unit = null;

            $all_lot_statuses_ordered_by_date = $current_lot_status->lot->statuses()->orderBy('start_date')->get();

            $lot_status_different_heat_unit = $all_lot_statuses_ordered_by_date->first(function ($item) use ($date, $heat_unit_id, $current_lot_status) {
                // dump( 'item_id: '.$item->id.' item_start_date: '.$item->start_date.' date: '.$date.' current_item_id: '.$current_lot_status->id.' current_lot_status_start_date: '.$current_lot_status->start_date);
                return $item->start_date < $date and $item->start_date > $current_lot_status->start_date and $item->productionUnit->heatUnit->id <> $heat_unit_id;

            });
            //dump($heat_unit_id, $current_lot_status->lot_id, $lot_status_different_heat_unit->id, '----------------');
            //dd($current_lot_status, $lot_status_different_heat_unit);

            if (!$lot_status_different_heat_unit) {
                Log::info('M2 CALCULATION');
                $total_lot_space_response = $this->getTotalLotSpace($current_lot_status->LOT, $date);
                $heat_unit_used_area = $heat_unit_used_area + $total_lot_space_response['total_lot_space'];
            }
        }

        return $heat_unit_used_area;
        // return $sorted_lots;
    }

    public function testApi()
    {

        $apiUrl = 'https://homestead.biflora/api/test';

        $response = Http::post($apiUrl, [
                'name' => 'Taylor',
                'page' => 1,
            ]
        );


        return json_decode($response->body());
    }

    public function addProductsToStore(Request $request)
    {
        $data = $request->all();
        // dd($data);
        //$response = Http::post('https://homestead.biflora/api/add_products?sku=100001&quantity=300');
        $client = new Client();
        // $response = $client->post('https://homestead.biflora/api/add_products?sku='.$data['sku'].'&quantity='.$data['qty']);
        $response = $client->post('https://floranova.ro/api/add_products?sku=' . $data['sku'] . '&quantity=' . $data['qty']);
        //$price = json_decode($response->getBody()->getContents());

        $info['price'] = json_decode($response->getBody()->getContents());
        // dd($price);

        if ($info['price']->product_price == -1) {
            $info['message'] = 'Error';
        } else {
            $lot = Lot::where('id', $data['lotId'])->first();

            if ($lot) {
                $request = new \Illuminate\Http\Request();

                $request->replace(
                    [
                        'lot_id' => $lot->id,
                        'start_date' => $lot->start_date,
                        'end_date' => $data['date'],

                    ]
                );

                $calculated_price = $this->getPrice($request);
                $calculated_price_with_loss = $calculated_price->original['total_price'] * $lot->quantity / $data['qty'];
                $original_quantity = $lot->quantity;
                $end_quantity = $data['qty'];
                $store_code = $data['sku'];
                $start_date = $lot->start_date;
                $end_date = $data['date'];


                $lot->end_date = $end_date;
                $lot->final_quantity = $end_quantity;
                $lot->final_price = round($calculated_price->original['total_price'], 2);
                $lot->final_price_with_loss = round($calculated_price_with_loss, 2);
                $lot->store_price = $info['price']->product_price;
                $lot->group_id = $store_code;
                $lot->save();


                // dd($calculated_price->original);
                $info['calculated_price'] = round($calculated_price->original['total_price'], 2);
                $info['calculated_price_with_loss'] = round($calculated_price_with_loss, 2);
                $info['original_quantity'] = $original_quantity;
                $info['end_quantity'] = $end_quantity;
                $info['store_code'] = $store_code;
                $info['start_date'] = $start_date;
                $info['end_date'] = $end_date;


                $info['message'] = 'Ok';
            } else {
                $info['message'] = 'Error';
            }


        }
        return $info;
    }


    public function checkIfLotFinished(Request $request)
    {
        $data = $request->all();
        $lot = Lot::where('id', $data['lot_id'])->first();

        return $lot;
    }

    public function notEmptyHeatUnit($heat_unit, $date)
    {
        $state = false;

        $carbon_date = Carbon::parse($date);
        //$carbon_date = Carbon::parse($date);

        //$heat_unit = HeatUnit::where('id', $heat_unit_id)->first();

        $production_units = $heat_unit->productionUnits;

        foreach ($production_units as $production_unit) {
            $lots = $production_unit->lots;
            //dd($lots);
            foreach ($lots as $lot) {

                $lot_end_date_carbon = Carbon::parse($lot->end_date);
                $lot_start_date_carbon = Carbon::parse($lot->start_date);

                if ($lot_start_date_carbon <= $carbon_date and ($carbon_date <= $lot_end_date_carbon or $lot->date == null)) {
                    $state = true;
                }
            }
        }
        //dump($heat_unit->name, $date, $state);
        return $state;
    }
}
