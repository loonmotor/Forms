import React, {Component} from 'react';
import FormQuestion from './FormQuestion';
import FormActionCreators from '../actions/FormActionCreators';

class PureForm extends Component {
	handleFormEdit (field, event) {
		FormActionCreators.editFormField(field, event.target.value);
	}
	render () {
		return (
			<div>
				<div className="uk-grid">
					<div className="uk-width-4-5 uk-container-center uk-margin-top">
						<div data-uk-sticky="{top:20}">
							<div className="uk-button-dropdown" data-uk-dropdown>
								<button className="uk-button">Start here <i className="uk-icon-caret-down"></i></button>
								<div className="uk-dropdown uk-dropdown-bottom">
									<ul className="uk-nav uk-nav-dropdown">
										<li><a onClick={FormActionCreators.addFormQuestion.bind(null)}>Add a Question</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="uk-width-3-5 uk-container-center uk-margin-top">
						<form className="uk-form uk-form-stacked uk-margin-large-top">
							<div className="uk-form-row">
								<label className="uk-form-label" htmlFor="title">Title</label>
								<input type="text" id="title" onChange={this.handleFormEdit.bind(this, 'title')} placeholder="Form Title" className="uk-width-1-1" value={this.props.form.title} />
							</div>
							<div className="uk-form-row">
								<label className="uk-form-label" htmlFor="description">Description</label>
								<input type="text" id="description" onChange={this.handleFormEdit.bind(this, 'description')} placeholder="Form Description" className="uk-width-1-1" value={this.props.form.description} />
							</div>
							{this.props.form.questions.map((question, index) => (
								<FormQuestion question={question} index={index} key={index} />
							))}
						</form>
					</div>
				</div>
				<div style={{height:1000}}></div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
			);
	}
}

export default PureForm;