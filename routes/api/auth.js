const express = require("express");
const router = express.Router();
const db = require("../../models");
const passport = require("../../passport-local"); 

router.post("/login", passport.authenticate("local"), function(req,res){
    res.json({success:true, user:req.user})
});

// router.post("/signup", function (req, res) {
//     db.User.create(req.body, function (error, response) {
//         if (error) {
//             console.log(error);
//             res.send(error)
//         }
//         else {
//             res.json(response);
//             console.log("hi");
//             console.log(req.body);
//         }
//     });
// });
router.post('/signup', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    db.User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
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

router.get("/auth", function(req, res){
    db.UserSession.findOne({isDeleted:false}).populate("userId").then(function(response){
        res.json({success:true, user:response.userId._id});
    })
})
module.exports = router;