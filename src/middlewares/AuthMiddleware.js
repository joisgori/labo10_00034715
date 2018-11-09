const mongoose = require;
const User
const bcrypt = require('bcrypt');
const Authmiddleware = {};

Authmiddleware.isAuthentication = function (req, res, next){
    if(!res.session.user){
        return res.redirect('/');
    }
    else{
        if(!user){
            return res.redirect('/');
        }
        else{
            bcrypt.compare (DataCue.userId, user._id.toString(), function(err, result){
                if(result = true){
                    return next();
                }
                else{
                    return next(err);
                }
            })
        }
    }
}