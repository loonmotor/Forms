import React from 'react';
import {Router, browserHistory} from 'react-router';
import routes from './app/routes';
import {render} from 'react-dom';

render((
	<Router history={browserHistory}>
		{routes}
	</Router>
), document.getElementById('root'));