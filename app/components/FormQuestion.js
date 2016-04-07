import React, {Component} from 'react';
import FormActionCreators from '../actions/FormActionCreators';

class FormQuestion extends Component {
	handleQuestionChange (index, field, event) {
		FormActionCreators.editFormQuestion(index, field, event.target.value);
	}
	render () {
		const {question, index} = this.props;
		return (
			<div className="uk-form-row uk-placeholder">
				<label className="uk-form-label" htmlFor="title">Question {index + 1}</label>
				<input type="text" onChange={this.handleQuestionChange.bind(this, index, 'title')} id="description" placeholder="" className="uk-width-6-10" value={question.title} />
				<select className="uk-width-3-10" value={question.type} onChange={this.handleQuestionChange.bind(this, index, 'type')}>
		            <option value="short">Short answer</option>
		            <option value="long">Long answer</option>
		        </select>
			    <a onClick={FormActionCreators.deleteFormQuestion.bind(null, index)} className="uk-close"></a>
			</div>
		);
	}
}

export default FormQuestion;