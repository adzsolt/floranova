<?php

namespace App\Http\Controllers;

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
}
