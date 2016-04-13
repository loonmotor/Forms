import React, {Component} from 'react';
import PureForm from './PureForm';
import {Container} from 'flux/utils';
import FormStore from '../stores/FormStore';
import AuthStatusStore from '../stores/AuthStatusStore';

class FormCreate extends Component {
	render () {
		const {authStatus} = this.state;
		if (authStatus) {
			return (
				<PureForm form={this.state.form} />
			);
		}
		return (
			<p>Please sign in</p>
		);
	}
}

FormCreate.getStores = () => [FormStore, AuthStatusStore];

FormCreate.calculateState = (prevState) => ({
	form : FormStore.getState(),
	authStatus : AuthStatusStore.getState()
});

export default Container.create(FormCreate);