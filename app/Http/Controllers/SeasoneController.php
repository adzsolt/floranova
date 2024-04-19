<?php

namespace App\Http\Controllers;

use App\Models\Season;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SeasoneController extends Controller
{
    public function getSeasons()
    {
        $seasons = Season::all();

        return response()->json(['seasons' => $seasons]);
    }

    public function getSeason(Request $request)
    {
        $data = $request->all();

        $season = Season::where('id',$data['id'])->first();

        if ($season) {
            return response()->json(['season' => $season]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();
         //dd($data);

        $season = new Season();
        $season->name = $data['name'];
        $season->start_date = $data['start_date'];
        $season->end_date = $data['end_date'];

        $season->save();


        return response()->json(['id' => 1]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $season = Season::where('id', $data['id'])->first();
        if($season) {
            $season->name = $data['name'];
            $season->start_date = $data['start_date'];
            $season->end_date = $data['end_date'];

            $season->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $season = Season::where('id',$data['id'])->first();

        if ($season) {
            $season->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


}
