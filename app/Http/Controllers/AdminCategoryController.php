<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminCategoryController extends Controller
{
    function index()
    {
        return view('admin.app');
    }
}
