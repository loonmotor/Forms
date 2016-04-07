import React, {Component} from 'react';
import PureForm from './PureForm';
import {Container} from 'flux/utils';
import FormStore from '../stores/FormStore';

class FormCreate extends Component {
	render () {
		return (
			<PureForm form={this.state.form} />
		);
	}
}

FormCreate.getStores = () => [FormStore];

FormCreate.calculateState = (prevState) => ({
	form : FormStore.getState()
});

export default Container.create(FormCreate);