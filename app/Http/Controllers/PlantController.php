<?php

namespace App\Http\Controllers;

use App\Models\Plant;
use Illuminate\Http\Request;

class PlantController extends Controller
{
    public function getPlants()
    {
        $plants = Plant::all();

        return response()->json(['plants' => $plants]);
    }

    public function getPlant(Request $request)
    {
        $data = $request->all();

        $plant = Plant::where('id',$data['id'])->first();

        if ($plant) {
            return response()->json(['plant' => $plant]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();
        //dd($data);

        $plant = new Plant();
        $plant->name = $data['name'];
        $plant->color = $data['color'];
        $plant->price = $data['price'];

        $plant->save();


        return response()->json(['id' => $plant->id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $plant = Plant::where('id', $data['id'])->first();
        if($plant) {
            $plant->name = $data['name'];
            $plant->color = $data['color'];
            $plant->price = $data['price'];

            $plant->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $plant = Plant::where('id',$data['id'])->first();

        if ($plant) {
            $plant->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }
}
