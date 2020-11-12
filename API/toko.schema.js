const mongoose = require("mongoose");

const TokoSchema = new mongoose.Schema({
    nama_toko : {
        type: String,
        required : true
    },
    nama_penjual : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique:true
    },
    password : {
        type: String,
        required : true
    },
    telepon : {
        type: Number,
        required : true
    },
    alamat : {
        type: String,
        required: true
    }
});

module.exports = TokoSchema;