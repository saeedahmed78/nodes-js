const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/user');
const config = require('../config/config');

passport.use(
  new LocalStrategy(
    {
        username: 'username',
        password: 'password',
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username }); // Use findById for exact match

        if (!user) {
          return done(null, false, { message: 'Incorrect username or password' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.secretKey,
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.userId); // Use findById for exact match

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

exports.isAuthenticated = passport.authenticate('jwt', { session: false });
