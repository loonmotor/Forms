import express from 'express';
import passport from 'passport';
import path from 'path';

const router = express.Router();

router.get('/status', (req, res) => {
	res.json({
		authStatus : true
	});
});

router.get('/google/:return?', passport.authenticate('google', {
	scope : ['email', 'public_profile']
}));

export default router;