require('dotenv').config();
require('./db/conn');

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-google-oauth').OAuth2Strategy;
const userdb = require('./model/user');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.json());

app.use(session({
    secret: "16352984mdhkahkenkus",
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userdb.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

passport.use(new OAuth2Strategy({
    clientID: clientId,
    clientSecret: clientSecret,
    callbackURL: "http://localhost:5000/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await userdb.findOne({ googleID: profile.id });

        if (!user) {
            user = new userdb({
                googleID: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            });
            await user.save();
        }

        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "http://localhost:3000/login"
}));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
