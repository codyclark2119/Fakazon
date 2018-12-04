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

router.get("/search/:query", function(req,res){
    let query = req.params.query;
    console.log(req.params.query)
    db.Item.find({"$or": [
        { product: { '$regex': query, '$options': 'i' } },
        { categories: { '$regex': query, '$options': 'i' } },
        { description: { '$regex': query, '$options': 'i' } }
    ]}).then( function (response, err) {
        console.log(response)
        if (err) {
            console.log(err);
            res.send(err);
        }
        else{
        res.json(response)
        }
    })
});

router.get("/category/:query", function(req,res){
    let query = req.params.query;
    console.log(req.params.query)
    db.Item.find({"category":{ "$regex": query, "$options": "i" }}).then( function (response, err) {
        console.log(response)
        if (err) {
            console.log(err);
            res.send(err);
        }
        else{
        res.json(response)
        }
    })
});

module.exports = router;
