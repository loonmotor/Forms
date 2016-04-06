import express from 'express';
import ejs from 'ejs';
import path from 'path';
import authRoute from './routes/auth';

const
	app = express();

app.engine('ejs', ejs.__express);
app.set('view engine', 'ejs');

app.use('/auth', authRoute);

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', (req, res) => {
	res.render('index');
});

app.listen(3000);