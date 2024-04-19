<?php

namespace App\Http\Controllers;

use App\Models\Peat;
use Illuminate\Http\Request;

class PeatController extends Controller
{
    public function getPeats()
    {
        $peats = Peat::all();

        return response()->json(['peats' => $peats]);
    }

    public function getPeat(Request $request)
    {
        $data = $request->all();

        $peat = Peat::where('id',$data['id'])->first();

        if ($peat) {
            return response()->json(['peat' => $peat]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();
        //dd($data);

        $peat = new Peat();
        $peat->name = $data['name'];
        $peat->price = $data['price'];

        $peat->save();


        return response()->json(['id' => $peat->id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $peat = Peat::where('id', $data['id'])->first();
        if($peat) {
            $peat->name = $data['name'];
            $peat->price = $data['price'];

            $peat->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $peat = Peat::where('id',$data['id'])->first();

        if ($peat) {
            $peat->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }
}
