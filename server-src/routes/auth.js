import express from 'express';
import passport from 'passport';
import path from 'path';
import config from '../../server.config';

const
	router = express.Router()
	, {credentials:{google:googleCredentials, facebook:facebookCredentials}} = config;

router.get('/status', (req, res) => {
	// console.log('auth', req.user);
	res.json({
		authStatus : !!req.user
	});
});

router.get('/google/:return?', passport.authenticate('google', {
	successRedirect : googleCredentials.successRedirect,
	scope : ['email']
}));

router.get('/facebook/:return?', passport.authenticate('facebook', {
	successRedirect : facebookCredentials.successRedirect,
	scope : ['email', 'public_profile']
}));

router.get('/sign-out', (req, res) => {
	req.logout();
	res.json({
		code : 'successSignOut',
		msg  : 'You have been signed out'
	});
});

router.get('/oauth-success', (req, res) => {
	res.sendFile('success.html', { root : path.join(__dirname, '../../public', 'html') });
});

export default router;