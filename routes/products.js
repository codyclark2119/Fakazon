const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/products", function(req,res){
    db.Item.find({}, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            res.json(response);
        }
    })
});

router.post("/", function(req,res){
    db.Item.push({}, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            res.json(response);
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

router.delete("/api/products/:id", function(req,res){
    res.send("Delete products")
});

module.exports = router;
