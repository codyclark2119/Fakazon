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

router.put("/:id", function(req,res){
    db.Cart.create(req.body, function (err, response) {
        if (err) {
            console.log(error);
            res.send(error);
        }
        res.json(response)
    })
});

module.exports = router;
