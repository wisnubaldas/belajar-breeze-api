<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'get-menu','middleware'=>'auth'], function () {
    Route::get('/menu', [\App\Http\Controllers\MenuPageController::class, 'getMenu'])->name('get-menu');
});