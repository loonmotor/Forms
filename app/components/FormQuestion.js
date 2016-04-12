import React, {Component} from 'react';
import FormActionCreators from '../actions/FormActionCreators';
import {DragSource, DropTarget} from 'react-dnd';
import MultipleChoice from './MultipleChoice';

const dragSpec = {
	beginDrag (props) {
		return {
			id : props.question.id
		}
	}
};

const dragCollect = (connect, monitor) => ({
	connectDragSource : connect.dragSource()
});

const dropSpec = {
	hover (props, monitor) {
		const draggedId = monitor.getItem().id;
		FormActionCreators.updateQuestionPosition(draggedId, props.question.id)
	}
};

const dropCollect = (connect, monitor) => ({
	connectDropTarget : connect.dropTarget(),
	isOver : monitor.isOver(),
	canDrop : monitor.canDrop()
});

class FormQuestion extends Component {
	handleQuestionChange (id, field, event) {
		FormActionCreators.editFormQuestion(id, field, event.target.value);
	}
	toggleRequired (id) {
		FormActionCreators.toggleFormQuestionRequired(id);
	}
	renderQuestion (question) {
		const {type} = question;
		switch (type) {
			case 'short' :
				return <input type="text" onChange={this.handleQuestionChange.bind(this, question.id, 'title')} id={question.id} placeholder="Add your question" className="uk-width-1-1" value={question.title} />;
			case 'long' :
				return (
					<textarea onChange={this.handleQuestionChange.bind(this, question.id, 'title')} placeholder="Add your question" className="uk-width-1-1" value={question.title}>

					</textarea>
				);
			case 'multiplechoice' :
				return <MultipleChoice questionId={question.id} options={question.options} />;
			case 'radio' :
				return <MultipleChoice questionId={question.id} options={question.options} />;
		}
	}
	render () {
		const {question, index, connectDragSource, connectDropTarget, isOver, canDrop} = this.props;
		const isActive = isOver && canDrop;
		const style = {
			opacity : 1
		};
		if (canDrop) {
			style.opacity = 0.5;
		}
		if (isActive) {
			style.opacity = 1;
		}
		return connectDropTarget(connectDragSource(
			<div className="uk-form-row uk-placeholder move-pointer" style={style}>
				<label className="uk-form-label" htmlFor={index}>Question {index + 1} <a onClick={FormActionCreators.deleteFormQuestion.bind(null, question.id)} className="uk-close uk-margin-left"></a></label>
				<div className="uk-margin">
					<label>
						<input type="checkbox" checked={question.required} onChange={this.toggleRequired.bind(this, question.id)} />
							{' '}Required
						</label>
				</div>
				<div className="uk-grid uk-grid-small">
					<div className="uk-width-3-10">
						<select className="uk-width-1-1" value={question.type} onChange={this.handleQuestionChange.bind(this, question.id, 'type')}>
				            <option value="short">Short answer</option>
				            <option value="long">Long answer</option>
				            <option value="multiplechoice">Multiple choice</option>
				            <option value="radio">Radio</option>
				        </select>
			        </div>
			        <div className="uk-width-7-10">
						{this.renderQuestion(question)}
					</div>
				</div>
			</div>
		));
	}
}

const dragHigherOrderQuestion = DragSource('question', dragSpec, dragCollect)(FormQuestion);
const dropHigherOrderQuestion = DropTarget('question', dropSpec, dropCollect)(dragHigherOrderQuestion);
export default dropHigherOrderQuestion;