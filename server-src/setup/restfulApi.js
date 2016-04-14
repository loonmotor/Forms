import restfulApi from '../modules/restfulApi';
import db from './mongojs';
import shortid from 'shortid';

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

restfulApi.use(['Form', 'Forms'], ['POST', 'PUT', 'DELETE'], (resourceName, req, res, done) => {
	if (!req.isAuthenticated()) {
		return done({ error : 'Not authenticated' });
	}
	done();
});

restfulApi.use('Form', 'POST', (resourceName, req, res, done) => {
	db.Form.insert({ shortId : shortid.generate(), userId : req.user._id }, (err, doc) => {
		if (err) {
			return done(err);
		}
		delete doc._id;
		res.json({
			doc
		});
		done();
	});
});

restfulApi.use('Form', 'GET', (resourceName, req, res, done) => {
	db.Form.findOne({ shortId : req.params.id }, { _id : 0 }, (err, doc) => {
		if (err) {
			return done(err);
		}
		res.json({
			doc
		});
		done();
	});
});

restfulApi.use('Form', 'PUT', (resourceName, req, res, done) => {
	db.Form.findAndModify({
		query  : { shortId : req.body.shortId, userId : req.user._id },
		fields : { _id : 0 },
		update : {
			$set : req.body
		},
		new : true
	}, (err, doc) => {
		if (err) {
			return done(err);
		}
		res.json({
			doc
		});
		done();
	});
});