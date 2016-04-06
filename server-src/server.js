import express from 'express';
import ejs from 'ejs';
import path from 'path';
import authRoute from './routes/auth';
import rootRoute from './routes/root';

const
	app = express();

app.engine('ejs', ejs.__express);
app.set('view engine', 'ejs');

app.use('/auth', authRoute);

app.use(express.static(path.join(__dirname, '../public')));

app.use('*', rootRoute);

app.listen(3000);