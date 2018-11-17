const express = require("express");
const router = express.Router();
const db = require("../../models/index.js");

router.get("/", function(req,res){
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

router.get("/:id", function(req,res){
    db.Item.findOne({ _id: req.params.id }, function (err, response) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(response)
    })
});

router.get("/products/:query", function(req,res){
    let query = req.params.query;
    db.Item.find().where({ product: query }).exec( function (err, response) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(response)
        console.log(response);
    })
});

module.exports = router;
