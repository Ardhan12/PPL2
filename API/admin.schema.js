const { text } = require("body-parser");
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    emial : {
        type: Number,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
});

module.exports = AdminSchema;