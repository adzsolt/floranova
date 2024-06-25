<?php

namespace App\Http\Controllers;

use App\Models\Business;
use Illuminate\Http\Request;

class BusinessController extends Controller
{
    public function getBusinesses()
    {
        $businesses = Business::all();

        return response()->json(['businesses' => $businesses]);
    }

    public function getBusiness(Request $request)
    {
        $data = $request->all();

        $business = Business::where('id',$data['id'])->first();

        if ($business) {
            return response()->json(['business' => $business]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();
        //dd($data);

        $business = new Business();
        $business->name = $data['name'];


        $business->save();


        return response()->json(['id' => $business->id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $business = Business::where('id', $data['id'])->first();
        if($business) {
            $business->name = $data['name'];
            $business->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $business = Business::where('id',$data['id'])->first();

        if ($business) {
            $business->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }
}
