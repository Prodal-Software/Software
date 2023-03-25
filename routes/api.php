<?php

use App\Http\Middleware\AccessReimbursementMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

/*

Route::group(['middleware' => ['jwt.verify']], function() {
        Route::get('user', 'UserController@getAuthenticatedUser');
        Route::get('closed', 'DataController@closed');
    });
*/

Route::group([

    'middleware' => 'api',
    // 'prefix' => 'auth'

], function ($router) {
    //Routes Auth
    Route::post('login', '\App\Http\Controllers\AuthController@login');
    Route::post('logout', '\App\Http\Controllers\AuthController@logout');
    Route::post('refresh', '\App\Http\Controllers\AuthController@refresh');
    Route::put('alter_password/{id}', '\App\Http\Controllers\AuthController@updatePassword');
    Route::put('alter_information/{id}', '\App\Http\Controllers\AuthController@alterInformation');

    Route::post('register', '\App\Http\Controllers\AuthController@register');
    Route::post('password/reset', '\App\Http\Controllers\Auth\ResetPasswordController@reset')->name('password.reset');
    Route::post('password/email', '\App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail');


    Route::group(['middleware' => ['jwt.verify']], function () {
        //Routes User
        Route::post('me', '\App\Http\Controllers\AuthController@me');
        Route::resource('user', '\App\Http\Controllers\UserController');

        //Routes Institution
        Route::resource('instituicao', '\App\Http\Controllers\InstituicaoController');

    });
});
