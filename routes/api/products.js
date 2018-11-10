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
            console.log(error);
            res.send(error);
        }
        res.json(response)
    })
});

module.exports = router;
