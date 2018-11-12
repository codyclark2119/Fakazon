const express = require("express");
const router = express.Router();
const db = require("../../models");
const passport = require("passport"); 

router.post("/login", passport.authenticate("local"), function(req,res){
    res.json({success:true, user:req.user})
});

router.post("/signup", function (req, res) {
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

router.get("/auth", function(req, res){
    db.UserSession.findOne({isDeleted:false}).populate("userId").then(function(response){
        res.json({success:true, user:response.userId._id});
    })
})
module.exports = router;