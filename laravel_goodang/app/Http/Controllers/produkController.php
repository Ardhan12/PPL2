<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProdukModel;

class ProdukController extends Controller
{
    public function get_all_produk()
    {
        // return response()->json(ProdukModel::all(),200);
        $daftar_produk = ProdukModel::all();
        return response([
            'status' => true,
            'message' => 'Daftar Barang',
            'data' => $daftar_produk
        ], 200);
    }

    public function insert_produk(Request $request)
    {
        $insert_produk = new ProdukModel;
        $insert_produk->nama_produk = $request->namaProduk;
        $insert_produk->stok = $request->stok_produk;
        $insert_produk->harga = $request->harga_produk;
        $insert_produk->netto = $request->netto_produk;
        $insert_produk->kadaluarsa = $request->kadaluarsa_produk;
        $insert_produk->save();
        return response([
            'status' => 'OK',
            'message' => "data produk ditambahkan",
            'data' => $insert_produk
        ],200);
    }

    public function update_produk(Request $request, $id)
    {
        $check_barang = ProdukModel::firstWhere('kode_produk', $id);
        if($check_barang){
            // echo 'data yang anda cari tersedia';
            $data_produk = ProdukModel::find($id);
            $data_produk->nama_produk = $request->namaProduk;
            $data_produk->stok = $request->stok_produk;
            $data_produk->harga = $request->harga_produk;
            $data_produk->netto = $request->netto_produk;
            $data_produk->kadaluarsa = $request->kadaluarsa_produk;
            $data_produk->save();
            return response([
                'status' => 'OK',
                'message' => 'Data produk berhasil diubah',
                'update data' => $data_produk
            ],200);
        } else {
            // echo 'tidak ada';
            return response([
                'status' => 'not found',
                'message' => 'data tidak ditemukan'
            ], 404);
        }
    }

    public function delete_produk($id){
        $check_barang = ProdukModel::firstWhere('kode_produk', $id);
        if($check_barang){
            ProdukModel::destroy($id);
            return response ([
                'status' => 'OK',
                'message' => 'data berhasil dihapus'
            ], 200);
        } else {
            return response([
                'status' => 'not found',
                'message' => 'data yang ingin dihapus tidak ditemukan'
            ], 404);
        }
    }
}
