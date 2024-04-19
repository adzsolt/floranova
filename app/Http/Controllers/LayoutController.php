<?php

namespace App\Http\Controllers;

use App\Models\Layout;
use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function getLayouts()
    {
        $layouts = Layout::all();

        return response()->json(['layouts' => $layouts]);
    }

    public function getLayout(Request $request)
    {
        $data = $request->all();

        $layout = Layout::where('id',$data['id'])->first();

        if ($layout) {
            return response()->json(['layout' => $layout]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function store(Request $request)
    {
        $data = $request->all();
        //dd($data);

        $layout = new Layout();
        $layout->name = $data['name'];
        $layout->pot_per_m2 = $data['pot_per_m2'];

        $layout->save();


        return response()->json(['id' => $layout->id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $layout = Layout::where('id', $data['id'])->first();
        if($layout) {
            $layout->name = $data['name'];
            $layout->pot_per_m2 = $data['pot_per_m2'];

            $layout->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $layout = Layout::where('id',$data['id'])->first();

        if ($layout) {
            $layout->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }
}
