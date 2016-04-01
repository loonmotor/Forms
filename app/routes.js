import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import FormList from './components/FormList';
import FormCreate from './components/FormCreate';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="form-list" component={FormList} />
		<Route path="form-create" component={FormCreate} />
	</Route>
);