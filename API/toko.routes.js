const router = require("express").Router();
const mongoose = require("mongoose");
const TokoSchema = require('./toko.schema');

const tokoModel = mongoose.model("toko", TokoSchema);

router.get('/', (req, res) =>{
    tokoModel.find((error, toko)=>{
        if (error !== null) {
            res.status(200).json({
              message: error.message,
            });
        } else {
            res.status(200).json(toko);
        }
    });
});

router.post('/', (req,res)=>{
    tokoModel.create(req.body, (error, toko)=> {
        if(error !== null){
            res.json({
                message: error.message
            })
        } else {
            res.status(201).json({
                message: "Data Toko berhasil dibuat",
                toko
            })
        }
    });
})

router.put('/', (req, res) => {
    const editedQuery = {
      nama_toko: req.body.nama_toko,
      nama_penjual: req.body.nama_penjual,
      password:req.body.password,
      telepon: req.body.telepon,
      alamat: req.body.alamat,
      jumlah_produk: req.body.jumlah_produk
    }
    tokoModel.update({ email: req.body.email }, editedQuery, (error, toko) => {
        if (error !== null) {
          res.json({
            message: error.message
          })
        } else {
          res.json({
            message: 'Data toko berhasil diubah',
            toko
          })
        }
    })
})
    
router.delete('/', (req, res) => {
    tokoModel.deleteOne({ email: req.body.email }, (error, toko) => {
        if (error !== null) {
            res.json({
            message: error.message
            })
        } else {
            res.json({
            message: 'Data toko berhasil dihapus',
            toko
            })
        }
    })
})

module.exports = router;