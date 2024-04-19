<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = User::all();
        $users_with_roles = [];

        foreach ($users as $user) {

            $u = [];
            $u['id'] = $user->id;
            $u['name'] = $user->name;
            $u['registered'] = $user->created_at->toDateString();
            $u['role'] = $user->roles[0]->name;
            $u['status'] = $user->active_id;
            $users_with_roles[] = $u;
        }

        return response()->json(['users' => $users_with_roles]);
    }

    public function getUser(Request $request)
    {
        $data = $request->all();

        $user = User::where('id',$data['id'])->first();

        if ($user) {
            return response()->json(['user' => $user]);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }

    public function profile()
    {
        //dd('alma a fa');
        return response()->json([
            'user' => new UserResource(auth()->user())
        ], 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        // dd($data);
        $user_id = 0;
        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);
        $user->active_id = 'Active';

        $user->save();

        $user_id = $user->id;

        return response()->json(['id' => $user_id]);
    }

    public function update(Request $request)
    {
        $data = $request->all();

        $user = User::where('id', $data['id'])->first();

        if($user) {
            $user->name = $data['name'];
            $user->email = $data['email'];
            if($data['password'] != '') {
                $user->password = Hash::make($data['password']);
            }
            $user->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error']);
    }

    public function delete(Request $request)
    {
        $data = $request->all();

        $user = User::where('id',$data['id'])->first();

        if ($user) {
            $user->delete();
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }
    }


    public function test()
    {
        $request = new \Illuminate\Http\Request();

        $data['id'] = 4;
        $data['name'] = 'rrrrrr1';
        $data['email'] = 'rrr@yahoo.com';
        $data['password'] = 'secret';
        $request->replace(['id' => $data['id'],'name' => $data['name'], 'email' => $data['email'], 'password' => $data['password']  ]);
        $response = $this->getUser($request);
        return ($response);
    }
}
