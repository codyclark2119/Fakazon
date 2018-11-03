const express = require("express");
const router = express.Router();
const db = require("../../models/index.js");

router.get("/api/products", function(req,res){
    db.Item.find({}, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            res.json(response);
            console.log(response);
        }
    })
});

router.get("/api/products/:id", function(req,res){
    db.Item.findOne({ _id: req.params.id }, function (err, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        res.json(response)
    })
});

module.exports = router;
