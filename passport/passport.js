const express = require('express');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require("../models");
const bcrypt = require('bcryptjs');
module.exports = function (passport, user) {

    passport.use("local",new Strategy(
        function (username, password, cb) {
            db.User.findOne({username: username}, function(err, response){
                if (err){
                    return cb(err);
                }            
                response.comparePassword(password, function (error, user) {
                    console.log("User Found is ", response);
                    db.UserSession.count({}, function(err, count){
                        if(count > 0){
                            db.UserSession.findOne({userId:response._id}).then(function(final){
                                console.log("Finalizing...", final)
                                return cb(null, final);
                            }).catch(function(errorr){
                                return cb(null, errorr)
                            })
                        }
                        else{
                            db.UserSession.create({userId:response._id}).then(function(final){
                                console.log("Finalizing...", final)
                                return cb(null, final);
                            }).catch(function(errorr){
                                return cb(null, errorr)
                            })
                        }
                    });
                });
            })
        }));
    passport.serializeUser(function (user, cb) {
        console.log("Serializing User...", user)
        cb(null, user);
    });

    passport.deserializeUser(function (id, cb) {
        console.log("Deserializing User...", id)
        db.User.findOne({_id:id}).then(function (errr, user) {
            if (errr) { return cb(errr); }
            console.log("User Found is ", user);
            db.UserSession.create({userId:user._id}).then(function(err, final){
                if (err) { return cb(err); }
                cb(null, user);
            })
        });
    });

}