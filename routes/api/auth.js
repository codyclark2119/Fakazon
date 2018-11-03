const express = require("express");
const router = express.Router();
const db = require("../../models");

router.post("/api/login", function(req,res){
    db.User.findOne({email: req.body.email}, function(err, response){
        if (err){
            return res.json(err);
        }
        
        response.comparePassword(req.body.password, function (error, user) {
            if(error){
                res.send(error)
            }
            res.json(user);
        });
    })
});

router.post("/api/signup", function (req, res) {
    db.User.create(req.body, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error)
        }
        else {
            res.json(response);
            console.log("hi");
            console.log(req.body);
        }
    });
});

module.exports = router;