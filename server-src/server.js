import express from 'express';
import ejs from 'ejs';
import path from 'path';
import authRoute from './routes/auth';
import rootRoute from './routes/root';
import dataRoute from './routes/data';
import publicDataRoute from './routes/publicData';
import restLogger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectRedis from 'connect-redis';
import htmlSanitizer from './middlewares/htmlSanitizer';
import redisClient from './setup/redisClient';
import passport from 'passport';
import './setup/passport';
import './setup/restfulApi';
import config from '../server.config';

const
	app = express()
	, RedisStore = connectRedis(session);

app.enable('trust proxy');

app.engine('ejs', ejs.__express);
app.set('view engine', 'ejs');

app.use(restLogger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : false, limit : config.limit.urlencoded }));
app.use(bodyParser.json({ limit : config.limit.jsonencoded }));
app.use(htmlSanitizer());
app.use(session({
	name   : 'forms',
	resave : false,
	saveUninitialized : false,
	secret : config.secret.session,
	cookie : {
		maxAge : config.maxAge.session
	},
	client : new RedisStore({
		client : redisClient
	})
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);
app.use('/data', dataRoute);
app.use('/public/data', publicDataRoute);

app.use(express.static(path.join(__dirname, '../public'), {
	maxAge : config.maxAge.static
}));

app.use('*', rootRoute);

app.listen(3000);