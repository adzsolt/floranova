<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function getRoles()
    {
        $roles = Role::all();
        return response()->json(['roles' => $roles]);
    }

    public function getUserRole(Request $request)
    {
        $data = $request->all();
        $user = User::where('id', $data['user_id'])->first();

        if($user){
            $role = $user->roles;
            return response()->json(['status' => 'success', 'roles' =>$role]);
        }
        else{
            return response()->json(['status' => 'error']);
        }

    }


    public function addRole(Request $request)
    {
        $data = $request->all();
        $user = User::where('id', $data['user_id'])->first();
        $role = Role::where('id', $data['role_id'])->first();

        if($user and $role){
            $user->assignRole($role->name);
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }

    }

    public function removeRole(Request $request)
    {
        $data = $request->all();
        $user = User::where('id', $data['user_id'])->first();
        $role = Role::where('id', $data['role_id'])->first();

        if($user and $role){
            $user->removeRole($role->name);
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }

    }

    public function updateRole(Request $request)
    {
        $data = $request->all();
        $user = User::where('id', $data['user_id'])->first();
        $role_remove = Role::where('id', $data['role_id_remove'])->first();
        $role_add = Role::where('id', $data['role_id_add'])->first();

        if($user and $role_remove and $role_add){
            $user->removeRole($role_remove->name);
            $user->assignRole($role_add->name);
            return response()->json(['status' => 'success']);
        }
        else{
            return response()->json(['status' => 'error']);
        }

    }


    public function test()
    {
        $request = new \Illuminate\Http\Request();

        $data['user_id'] = 4;
        $data['role_id_remove'] = 4;
        $data['role_id_add'] = 6;
        $request->replace(['user_id' => $data['user_id'],'role_id_remove' => $data['role_id_remove'],'role_id_add' => $data['role_id_add'] ]);
        $response = $this->getUserRole($request);
        return ($response);
    }


}

