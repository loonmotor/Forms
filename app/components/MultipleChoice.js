import React, {Component} from 'react';
import FormActionCreators from '../actions/FormActionCreators';

class MultipleChoice extends Component {
	handleInputChange (questionId, optionId, event) {
		FormActionCreators.editMultipleChoiceOption(questionId, optionId, { title : event.target.value });
	}
	render () {
		const {questionId, options} = this.props;
		return (
			<div className="uk-grid uk-grid-large">
				{options.map(option => (
					<div className="uk-width-1-1" key={option.id}>
						<input type="text" value={option.title} onChange={this.handleInputChange.bind(this, questionId, option.id)} placeholder="Add your option" className="uk-width-1-1" />
					</div>
				))}
			</div>
		);
	}
}

export default MultipleChoice;