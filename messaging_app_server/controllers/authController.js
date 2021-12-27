const User = require('../models/userModel');
const passport = require('passport');
exports.sign_up = function(req, res, next){
    const User = new User({
        username: req.body.username,
        password: req.body.password,
    }).save((err) => {
        if (err){
            return next(err)
        }
        res.redirect('/')
    })
}

exports.sign_in =  passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/"
    }
    );