<?php

namespace App\Http\Controllers;

use App\Models\Fertilizer;
use App\Models\FertilizerStatus;
use App\Models\Pot;
use Illuminate\Http\Request;

class FertilizerController extends Controller
{
    public function getFertilizers()
    {
        $fertilizers = Fertilizer::all();
        foreach ($fertilizers as $key => $fertilizer) {

            $fertilizers[$key]['statuses'] = $fertilizer->fertilizer_statuses;
        }
        return response()->json(['fertilizers' => $fertilizers]);
    }

    public function getFertilizer(Request $request)
    {
        $data = $request->all();

        $fertilizer = Fertilizer::where('id', $data['id'])->first();

        if ($fertilizer) {
            $fertilizer['statuses'] = $fertilizer->fertilizer_statuses;
            return response()->json(['fertilizer' => $fertilizer]);
        } else {
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();

        //dd($data);
        $fertilizer = new Fertilizer();
        $fertilizer->name = $data['name'];
        $fertilizer->using = $data['using'];
        $fertilizer->provision = $data['provision'];
        $fertilizer->price = $data['price'];

        $fertilizer->save();

        $fertilizer->fertilizer_statuses()->create([
            'action' => 'Hozzáadás',
            'volume' => $data['provision'],
            'price' => $data['price'],
            'action_date' => $data['action_date']

        ]);
        return response()->json(['id' => $fertilizer->id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $fertilizer = Fertilizer::where('id', $data['id'])->first();
        if ($fertilizer) {

            $fertilizer->name = $data['name'];
            $fertilizer->using = $data['using'];
            $fertilizer->provision = $data['provision'];
            $fertilizer->price = $data['price'];

            $fertilizer->save();

            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $fertilizer = Fertilizer::where('id', $data['id'])->first();

        if ($fertilizer) {

            $statuses = $fertilizer->fertilizer_statuses;

            foreach ($statuses as $status) {
                $fertilizer_status = FertilizerStatus::where('id', $status->id);
                $fertilizer_status->delete();
            }

            $fertilizer->delete();
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error']);
        }
    }

    public function addStatus(Request $request)
    {
        $data = $request->all();
        //dd($data);
        $fertilizer = Fertilizer::where('id', $data['id'])->first();

        //dd($fertilizer->fertilizer_statuses);

        if ($fertilizer) {


            $fertilizer->fertilizer_statuses()->create([
                'action' => $data['action'],
                'lot_id' => $data['lot_id'],
                'volume' => $data['volume'],
                'price' => $data['price'],
                'action_date' => $data['action_date']
            ]);


            if ($data['action'] == 'Hozzáadás') {
                $fertilizer->provision = $fertilizer->provision + $data['volume'];
            } else {
                $fertilizer->provision = $fertilizer->provision - $data['volume'];
            }
            if ($data['price'] <> 0) {
                $fertilizer->price = ($fertilizer->price + $data['price']) / 2;
            }
            $fertilizer->save();
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error']);
        }
    }

    public function deleteStatus(Request $request)
    {
        $data = $request->all();

        $fertilizer_status = FertilizerStatus::where('id', $data['id'])->first();

        if ($fertilizer_status) {

            $fertilizer_status->delete();

            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error']);
        }
    }
}
