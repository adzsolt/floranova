<?php

namespace App\Http\Controllers;

use App\Models\Pot;
use Illuminate\Http\Request;

class PotController extends Controller
{
    public function getPots()
    {
        $pots = Pot::all();

        return response()->json(['pots' => $pots]);
    }

    public function getPot(Request $request)
    {
        $data = $request->all();

        $pot = Pot::where('id',$data['id'])->first();

        if ($pot) {
            return response()->json(['pot' => $pot]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();
        //dd($data);

        $pot = new Pot();
        $pot->name = $data['name'];
        $pot->size = $data['size'];
        $pot->price = $data['price'];

        $pot->save();


        return response()->json(['id' => $pot->id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $pot = Pot::where('id', $data['id'])->first();
        if($pot) {
            $pot->name = $data['name'];
            $pot->size = $data['size'];
            $pot->price = $data['price'];

            $pot->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $pot = Pot::where('id',$data['id'])->first();

        if ($pot) {
            $pot->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }
}
