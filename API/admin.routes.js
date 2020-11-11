const router = require("express").Router();
const mongoose = require("mongoose");
const AdminSchema = require('./admin.schema');

const adminModel = mongoose.model("admin", AdminSchema);

router.get('/', (req, res) =>{
    adminModel.find((error, admin)=>{
        if (error !== null) {
            res.status(200).json({
              message: error.message,
            });
        } else {
            res.status(200).json(admin);
        }
    });
});

router.post('/', (req,res)=>{
    adminModel.create(req.body, (error, admin)=> {
        if(error !== null){
            res.json({
                message: error.message
            })
        } else {
            res.status(201).json({
                message: "Data admin berhasil dibuat",
                admin
            })
        }
    });
})

router.put('/', (req, res) => {
    const editedQuery = {
      name: req.body.name,
      passsword: req.body.password
    }
    adminModel.update({ email: req.body.email }, editedQuery, (error, admin) => {
        if (error !== null) {
          res.json({
            message: error.message
          })
        } else {
          res.json({
            message: 'Data admin berhasil diubah',
            admin
          })
        }
    })
})
    
router.delete('/', (req, res) => {
    adminModel.deleteOne({ email: req.body.email }, (error, admin) => {
        if (error !== null) {
            res.json({
            message: error.message
            })
        } else {
            res.json({
            message: 'Data admin berhasil dihapus',
            admin
            })
        }
    })
})

module.exports = router;