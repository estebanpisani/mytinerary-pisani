const passport = require('passport');
const Strategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/user');


module.exports = passport.use(new Strategy(
    {
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY
    }, (payload, done) => {
        console.log(payload);
        User.findOne({ id: payload._id })
            .then(user => {
                // console.log(user);
                if (user) {
                    return done(null, user)
                } else if (error) {
                    console.log(error);
                    return done(error, null);
                } else {
                    return done(null, null)
                }
            })
            .catch(error => {
                console.log(error);
                return done(error, null)
            })
    }
))
