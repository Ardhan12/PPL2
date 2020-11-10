const mongoose = require("mongoose");

const TokoSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    alamat : {
        type: String,
        unique: true,
        required: true
    },
    jumlah_produk: {
        type: Number
    }
});

module.exports = TokoSchema;