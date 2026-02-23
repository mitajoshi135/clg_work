<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;

Route::get('/', function () {
    return view('welcome');
});
// Route::get('show',[userController::class,'show']);
// Route::get('add',[userController::class,'add']);
// Route::get('delete',[userController::class,'delete']);

Route::controller(userController::class)->group(function()
{
    Route::get('show','show');
    Route::get('add','add');
    Route::get('delete','delete');
    Route::get('about/{about}','about');
});