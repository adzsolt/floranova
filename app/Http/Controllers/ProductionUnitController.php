<?php

namespace App\Http\Controllers;

use App\Models\ProductionUnit;
use Illuminate\Http\Request;

class ProductionUnitController extends Controller
{
    public function getProductionUnits()
    {
        $production_units = ProductionUnit::all();

        $production_units_with_heat_units = [];

        foreach ($production_units as $production_unit) {

            $p = [];
            $p['id'] = $production_unit->id;
            $p['name'] = $production_unit->name;
            $p['length'] = $production_unit->length;
            $p['width'] = $production_unit->width;
            $p['heat_unit'] = $production_unit->heatUnit->name;
            $production_units_with_heat_units[] = $p;
        }

        return response()->json(['production_units' => $production_units_with_heat_units]);
    }

    public function getProductionUnit(Request $request)
    {
        $data = $request->all();

        $production_unit = ProductionUnit::where('id',$data['id'])->first();
        $production_unit['heat_unit'] = $production_unit->heatUnit->name;

        if ($production_unit) {
            return response()->json(['production_unit' => $production_unit]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();
        //dd($data);

        $production_unit = new ProductionUnit();
        $production_unit->name = $data['name'];
        $production_unit->length = $data['length'];
        $production_unit->width = $data['width'];
        $production_unit->heat_unit_id = $data['heat_unit_id'];


        $production_unit->save();


        return response()->json(['id' => $production_unit->id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $production_unit = ProductionUnit::where('id', $data['id'])->first();
        if($production_unit) {
            $production_unit->name = $data['name'];
            $production_unit->length = $data['length'];
            $production_unit->width = $data['width'];
            $production_unit->heat_unit_id = $data['heat_unit_id'];
            $production_unit->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $production_unit = ProductionUnit::where('id',$data['id'])->first();

        if ($production_unit) {
            $production_unit->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }
}
