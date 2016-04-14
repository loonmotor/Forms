import React, {Component} from 'react';
import PureForm from './PureForm';
import {Container} from 'flux/utils';
import FormStore from '../stores/FormStore';
import AuthStatusStore from '../stores/AuthStatusStore';
import FormActionCreators from '../actions/FormActionCreators';
import {browserHistory} from 'react-router';

class FormCreate extends Component {
	componentDidMount () {
		console.log(this.state.form);
		const {authStatus} = this.state;
		if (authStatus) {
			FormActionCreators.createForm();
		}
	}
	switchToFormEdit (shortId) {
		setTimeout(function (shortId) {
			browserHistory.replace('/create/' + shortId);
		}, 0, shortId);
	}
	render () {
		const {form:{shortId}} = this.state;
		if (shortId) {
			this.switchToFormEdit(shortId);
		}
		return null;
	}
}

FormCreate.getStores = () => [FormStore, AuthStatusStore];

FormCreate.calculateState = (prevState) => ({
	form : FormStore.getState(),
	authStatus : AuthStatusStore.getState()
});

export default Container.create(FormCreate);