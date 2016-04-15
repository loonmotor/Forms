import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import FormList from './components/FormList';
import FormCreate from './components/FormCreate';
import FormEdit from './components/FormEdit';
import NotFound from './components/NotFound';

export default (
	<Route path="/" name="Home" component={App}>
		<IndexRoute component={FormCreate} />
		<Route path="forms" name="My Forms" component={FormList} />
		<Route path="create" name="Create a New Form" component={FormCreate} />
		<Route path="create/:id" name="Create a New Form" component={FormEdit} />
		<Route path="edit/:id" name="Edit Form" component={FormEdit} />
		<Route path="*" name="Not found" component={NotFound} />
	</Route>
);