const express = require("express");
const router = express.Router();
const db = require("../../models/index.js");

router.get("/", function(req,res){
    db.Cart.find({}, function (error, response) {
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
    db.Cart.create(req.body, function(err, response){
        if (err){
            return res.json(err);
        }

        return res.json(response);
    })
});

router.delete("/:id", function(req,res){
    db.Cart.deleteOne({ _id: req.params.id }, function (err, response) {
        if (err) {
            console.log(error);
            res.send(error);
        }
        res.json(response)
    })
});

module.exports = router;
