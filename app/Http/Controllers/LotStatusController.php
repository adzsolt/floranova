<?php

namespace App\Http\Controllers;

use App\Models\Lot;
use App\Models\LotStatus;
use Illuminate\Http\Request;

class LotStatusController extends Controller
{


    public function createLotStatus(Request $request)
    {
        $data = $request->all();

        //dd($data);
        $lot_status = new LotStatus();

        $lot_status->start_date = $data['start_date'];
        $lot_status->production_unit_id = $data['production_unit_id'];
        $lot_status->layout_id = $data['layout_id'];
        $lot_status->lot_id = $data['lot_id'];

        $lot_status->save();


        return response()->json(['lot_status' => $lot_status]);

    }

    public function updateLotStatus(Request $request)
    {
        $data = $request->all();

        $lot_status = LotStatus::where('id',$data['lot_status_id'])->first();

        if($lot_status) {
            $lot_status->start_date = $data['start_date'];
            $lot_status->production_unit_id = $data['production_unit_id'];
            $lot_status->layout_id = $data['layout_id'];
            $lot_status->save();


            return response()->json(['lot_status' => $lot_status]);
        } else {
            return response()->json(['status' => 'error']);
        }
    }
}
