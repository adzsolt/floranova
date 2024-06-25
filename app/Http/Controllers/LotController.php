<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\Fertilizer;
use App\Models\FertilizerStatus;
use App\Models\Layout;
use App\Models\Lot;
use App\Models\LotStatus;
use App\Models\Peat;
use App\Models\Plant;
use App\Models\Pot;
use App\Models\ProductionUnit;
use App\Models\Season;
use App\Models\Work;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;

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

    public function getLotFormData()
    {
        $data = [];
        $data['peats'] = Peat::all();
        $data['pots'] = Pot::all();
        $data['plants'] = Plant::all();
        $data['seasons'] = Season::all();
        $data['production_units'] = ProductionUnit::all();
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

        $data['total_price'] = $price;

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

        $fertilezer_statuses = FertilizerStatus::where('lot_id', $lot->id)->where('action_date', '>=', $start)->where('action_date', '<=', $end)->get();

        //dd($start, $end, $lot,$fertilezer_statuses);

        foreach ($fertilezer_statuses as $fertilezer_status) {
            // dump($fertilezer_status->volume,$fertilezer_status->fertilizer->price);
            $fertilizer_price = $fertilizer_price + $fertilezer_status->volume * $fertilezer_status->fertilizer->price;
        }


        return $fertilizer_price;
    }


    public function getWorkPrice($lot, $start, $end)
    {
        $work_price = 0;
        //$lot = Lot::where('id', 9)->first();

        $business_id = $lot->productionUnit->heatUnit->business_id;
        $period = CarbonPeriod::create($start, $end);


        foreach ($period as $date) {
            //dump($date);
            $work = null;
            $total_used_space = 0;
            $total_lot_space = 0;
            $work= Work::where('work_date', $date)->first();
            $work_spend = $work->spend;
            //dd($work_spend);
                $total_used_space = $this->getTotalUsedSpace($business_id, $date);
                $total_lot_space = $this->getTotalLotSpace($lot, $date);
            if($work_spend and $total_used_space['total_used_space'] and $lot->start_date <= $date){
               //dump($date->format('Y-m-d'), 'work_spend ', $work_spend, 'total_used', $total_used_space['total_used_space'], 'total_lot',$total_lot_space['total_lot_space'],
                //  'price',($work_spend / $total_used_space['total_used_space']) * $total_lot_space['total_lot_space']);
                $work_price = $work_price + ($work_spend / $total_used_space['total_used_space']) * $total_lot_space['total_lot_space'];
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

        foreach ($lots as $lot) {
            if ($lot->start_date <= $date) {
                $lot_names[] = $lot->name;
                $statuses = $lot->statuses()->get();
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


            }
        }

        $data['lot_names'] = $lot_names;
        $data['lot_statuses'] = $lot_statuses;
        $data['dates'] = $dates;
        $data['total_used_space'] = $total_used_space;

        return $data;
    }

    public function getTotalLotSpace($lot, $date)
    {
        ///$lot = Lot::where('id', $lot_id)->first();

        $statuses = $lot->statuses()->get();
        //dd($statuses);
        $current_status_key = $statuses->reverse()->keys()->first();
        $best_date = '2030-01-01';
        foreach ($statuses as $status_key => $status) {
            if($status->start_date > $date){
                continue;
            }
            else{
                $current_status_key = $status_key;
                $best_date = $status->start_date;
                break;

            }

        }

        $current_pot_per_m2 = $statuses[$current_status_key]->layout->pot_per_m2;

        $data['total_lot_space'] = $lot->quantity/$current_pot_per_m2;
        $data['best_date'] = $best_date;
        return $data;

    }

    public function getTotalHeatUnitUsedSpace($heat_unit_id, $date)
    {

    }
}
