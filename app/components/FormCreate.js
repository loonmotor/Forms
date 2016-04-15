import React, {Component} from 'react';
import PureForm from './PureForm';
import {Container} from 'flux/utils';
import FormStore from '../stores/FormStore';
import ActionStore from '../stores/ActionStore';

class FormCreate extends Component {
	render () {
		console.log('haha');
		return (
			<div>
				<PureForm form={this.state.form} />
				<br /> 
				<br />
				<hr />
		
				        <div className="uk-panel uk-panel-box uk-margin-bottom">
				    		<h3 className="uk-panel-title">State</h3>
				    		<textarea value={JSON.stringify(this.state.form, null, 4)} style={{ width: '100%', height: 400 }} readOnly>
					            
				            </textarea>
				        </div>
				        <div className="uk-panel uk-panel-box uk-margin-large-bottom">
				    		<h3 className="uk-panel-title">Actions</h3>
		            		<textarea value={JSON.stringify(this.state.actions, null, 4)} style={{ width: '100%', height: 400 }} readOnly>
		                     
		                    </textarea>
				        </div>
			</div>
		);
	}
}

FormCreate.getStores = () => [FormStore, ActionStore];

FormCreate.calculateState = (prevState) => ({
	form : FormStore.getState(),
	actions : ActionStore.getState()
});

export default Container.create(FormCreate);
