const { text } = require("body-parser");
const mongoose = require("mongoose");

const ProdukSchema = new mongoose.Schema({
    nama_produk : {
        type: String,
        required : true,
        unique: true
    },
    harga : {
        type: Number,
        required: true
    },
    stok : {
        type: Number,
        required: true
    },
    netto : {
        type: String,
        required: true
    },
    kadaluarsa : {
        type: Date,
        required: true
    }
});

module.exports = ProdukSchema;