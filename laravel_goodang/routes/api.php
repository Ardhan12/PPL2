<?php

use Illuminate\Http\Request;

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

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');

Route::get('/produk','ProdukController@get_all_produk');
Route::post('/produk/tambah_produk','ProdukController@insert_produk');
Route::put('/produk/update/{kode_produk}', 'ProdukController@update_produk');
Route::delete('/produk/delete/{kode_produk}', 'ProdukController@delete_produk');