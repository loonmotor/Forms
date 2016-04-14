import React, {Component} from 'react';
import PureForm from './PureForm';
import {Container} from 'flux/utils';
import FormStore from '../stores/FormStore';
import AuthStatusStore from '../stores/AuthStatusStore';
import FormActionCreators from '../actions/FormActionCreators';
import {browserHistory} from 'react-router';
import _ from 'lodash';
import shallowCompare from 'react-addons-shallow-compare';

const intervallyEditForm = _.debounce((form) => {
	FormActionCreators.editForm(form);
}, 3000);

class FormEdit extends Component {
	componentDidMount () {
		console.log(this.state);
		FormActionCreators.editForm(this.state.form);
	}
	componentWillUpdate (nextProps, nextState) {
		if (nextState.form.shortId) {
			console.log('lalalala');
			intervallyEditForm(nextState.form);
		}
	}
	shouldComponentUpdate (nextProps, nextState) {
		return false;
	}
	render () {
		const {authStatus} = this.state;
		if (authStatus) {
			return (
				<PureForm form={this.state.form} shortId={this.props.params.id} />
			);
		}
		return (
			<p>Please sign in</p> 
		);
	}
}

FormEdit.getStores = () => [FormStore, AuthStatusStore];

FormEdit.calculateState = (prevState) => ({
	form : FormStore.getState(),
	authStatus : AuthStatusStore.getState()
});

export default Container.create(FormEdit);