import React from 'react';
import {Router, browserHistory} from 'react-router';
import routes from './app/routes';
import NavMenu from './app/components/NavMenu.js';
import Breadcrumb from './app/components/Breadcrumb';
import {render} from 'react-dom';

render(<NavMenu />, document.getElementById('nav-menu'));
render(<Breadcrumb />, document.getElementById('breadcrumb'));
render((
	<Router history={browserHistory}>
		{routes}
	</Router>
), document.getElementById('root'));