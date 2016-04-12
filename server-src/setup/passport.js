import passport from 'passport';
import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth';
import {Strategy as FacebookStrategy} from 'passport-facebook';
import db from './mongojs';
import config from '../../server.config';

const
	{credentials:{google:googleCredentials, facebook:facebookCredentials}} = config;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy({
	clientID          : googleCredentials.clientID,
	clientSecret      : googleCredentials.clientSecret,
	callbackURL       : googleCredentials.callbackURL,
	passReqToCallback : true
}, (req, accessToken, refreshToken, profile, done) => {
	process.nextTick(() => {
		if (req.user) {
			return done(null, req.user);
		}
		db.User.findOne({ 'google.id' : profile.id }, (err, user) => {
			if (err) {
				return done(err);
			}
			const $set = {
				'email' : profile.emails.length > 0 && profile.emails[0].value,
				'google.id' : profile.id,
				'google.email' : profile.emails.length > 0 && profile.emails[0].value,
				'google.name' : profile.displayName
			};

			db.User.findAndModify({
				query  : { 'google.id' : profile.id },
				update : {
					$set
				},
				upsert : true,
				new    : true
			}, (err, doc) => {
				if (err) {
					throw err;
				}
				done(null, doc);
			});
		});
	});
}));

passport.use(new FacebookStrategy({
	clientID          : facebookCredentials.clientID,
	clientSecret      : facebookCredentials.clientSecret,
	callbackURL       : facebookCredentials.callbackURL,
	profileFields     : ['email'],
	passReqToCallback : true
}, (req, accessToken, refreshToken, profile, done) => {
	process.nextTick(() => {
		if (req.user) {
			return done(null, req.user);
		}
		db.User.findOne({ 'facebook.id' : profile.id }, (err, user) => {
			if (err) {
				return done(err);
			}
			const $set = {
				'email'          : profile.emails.length > 0 && profile.emails[0].value,
				'facebook.id'    : profile.id,
				'facebook.email' : profile.emails.length > 0 && profile.emails[0].value,
				'facebook.name'  : profile.displayName
			};
			db.User.findAndModify({
				query  : { 'facebook.id' : profile.id },
				update : {
					$set
				},
				upsert : true,
				new    : true
			}, (err, doc) => {
				if (err) {
					throw err;
				}
				done(null, doc);
			});
		});
	});
}));

export default passport;