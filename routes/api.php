<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Person\StoreController;
use App\Http\Controllers\Person\IndexController;
use App\Http\Controllers\Person\UpdateController;
use App\Http\Controllers\Person\DeleteController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['namespace' => 'Person', 'prefix' => 'people'], function() {
    Route::post('/', [StoreController::class, 'test']);
    Route::get('/', [IndexController::class, 'test']);
    Route::patch('/{person}', [UpdateController::class, 'test']);
    Route::delete('/{person}', [DeleteController::class, 'test']);
});

