const router = require("express").Router();
const mongoose = require("mongoose");
const ProdukSchema = require('./produk.schema');

const produkModel = mongoose.model("produk", ProdukSchema);

router.get('/', (req, res) =>{
    produkModel.find((error, produk)=>{
        if (error !== null) {
            res.status(200).json({
              message: error.message,
            });
        } else {
            res.status(200).json(produk);
        }
    });
});

router.post('/', (req,res)=>{
    produkModel.create(req.body, (error, produk)=> {
        if(error !== null){
            res.json({
                message: error.message
            })
        } else {
            res.status(201).json({
                message: "Data produk berhasil dibuat",
                produk
            })
        }
    });
})

router.put('/', (req, res) => {
    const editedQuery = {
      name: req.body.name,
      jumlah_produk: req.body.jumlah_produk
    }
    produkModel.update({ alamat: req.body.alamat }, editedQuery, (error, produk) => {
        if (error !== null) {
          res.json({
            message: error.message
          })
        } else {
          res.json({
            message: 'Data produk berhasil diubah',
            produk
          })
        }
    })
})
    
router.delete('/', (req, res) => {
    produkModel.deleteOne({ alamat: req.body.alamat }, (error, produk) => {
        if (error !== null) {
            res.json({
            message: error.message
            })
        } else {
            res.json({
            message: 'Data produk berhasil dihapus',
            produk
            })
        }
    })
})

module.exports = router;