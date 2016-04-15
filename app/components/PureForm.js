import React, {Component} from 'react';
import FormQuestion from './FormQuestion';
import FormActionCreators from '../actions/FormActionCreators';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class PureForm extends Component {
	componentDidMount () {
		UIkit.sticky(document.getElementById('start-here-sticky'), { top : 20 });
	}
	handleFormEdit (field, event) {
		FormActionCreators.editFormField(field, event.target.value);
	}
	render () {
		return (
			<div>
				<div className="uk-grid">
					<div className="uk-width-4-5 uk-container-center uk-margin-top">
						<div data-uk-sticky="{top:20}" id="start-here-sticky">
							<div className="uk-button-dropdown uk-float-right" data-uk-dropdown>
								<button className="uk-button">Start here <i className="uk-icon-caret-down"></i></button>
								<div className="uk-dropdown uk-dropdown-bottom">
									<ul className="uk-nav uk-nav-dropdown">
										<li><a onClick={FormActionCreators.addFormQuestion.bind(null)}>Add a Question</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="uk-width-medium-4-5 uk-width-large-3-5 uk-container-center uk-margin-top">
						<form className="uk-form uk-form-stacked uk-margin-large-top">
							{this.props.shortId ?
								(
									<div className="uk-form-row">
										<label className="uk-form-label" htmlFor="shareLink">Share Link</label>
										<input type="text" id="shareLink" className="uk-width-1-1" defaultValue={this.props.shortId} readOnly />
									</div>
								) :
								''
							}
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
			</div>
			);
	}
}

export default DragDropContext(HTML5Backend)(PureForm);