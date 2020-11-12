const { text } = require("body-parser");
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email_admin : {
        type: String,
        required: true,
        unique: true
    },
    password_admin : {
        type: String,
        required: true
    }
});

module.exports = AdminSchema;