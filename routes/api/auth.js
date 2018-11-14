const express = require("express");
const router = express.Router();
const db = require("../../models");
const User = require("../../models/User");
const passport = require("../../passport-local"); 

router.post("/login", passport.authenticate("local"), function(req,res){
    res.json({success:true, user:req.user.username})
});

router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: "logging out" })
    } else {
        res.send({ msg: "No user found"})
    }
});

router.post("/signup", (req, res) => {
    const { username, password } = req.body
    db.User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("User.js error", err)
        } else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

module.exports = router;