const express = require("express");
const mongoose = require("mongoose");
const produkRoutes = require('./produk.routes');
const tokoRoutes = require('./toko.routes');
const bodyParser = require("body-parser"); 

const app = express();

app.use(bodyParser.json())

const dbUri = 'mongodb://localhost:27017/Toko';
mongoose.connect(dbUri);
mongoose.connection.on("connected", ()=> {
    console.log("mongo berhasil dikoneksikan");
})

app.use('/toko', tokoRoutes)
app.use('/produk', produkRoutes)

app.listen(3000, ()=> {
    console.log("server running on port 3000");
})