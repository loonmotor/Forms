import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import FormList from './components/FormList';
import FormCreate from './components/FormCreate';

export default (
	<Route path="/" name="Home" component={App}>
		<IndexRoute component={Home} />
		<Route path="forms" name="My Forms" component={FormList} />
		<Route path="create" name="Create a New Form" component={FormCreate} />
	</Route>
);