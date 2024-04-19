<?php

namespace App\Http\Controllers;

use App\Models\HeatUnit;
use Illuminate\Http\Request;

class HeatUnitController extends Controller
{
    public function getHeatUnits()
    {
        $heat_units = HeatUnit::all();

        return response()->json(['heat_units' => $heat_units]);
    }

    public function getHeatUnit(Request $request)
    {
        $data = $request->all();

        $heat_unit = HeatUnit::where('id',$data['id'])->first();

        if ($heat_unit) {
            return response()->json(['heat_unit' => $heat_unit]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();
        //dd($data);

        $heat_unit = new HeatUnit();
        $heat_unit->name = $data['name'];


        $heat_unit->save();


        return response()->json(['id' => $heat_unit->id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $heat_unit = HeatUnit::where('id', $data['id'])->first();
        if($heat_unit) {
            $heat_unit->name = $data['name'];
            $heat_unit->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $heat_unit = HeatUnit::where('id',$data['id'])->first();

        if ($heat_unit) {
            $heat_unit->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }
}
