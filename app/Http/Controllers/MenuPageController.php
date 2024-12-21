<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuPageController extends Controller
{
    public function getMenu()
    {
        $menu = \App\Models\PageMenu::where('active', 1)->get();
        return response()->json($menu);
    }
}
