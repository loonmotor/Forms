import React, {Component} from 'react';
import FormActionCreators from '../actions/FormActionCreators';
import {DragSource, DropTarget} from 'react-dnd';

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
	render () {
		const {question, index, connectDragSource, connectDropTarget, isOver, canDrop} = this.props;
		const isActive = isOver && canDrop;
		const style = {
			opacity : 1
		};
		if (isActive) {
			style.opacity = 0.5;
		}
		return connectDropTarget(connectDragSource(
			<div className="uk-form-row uk-placeholder" style={style}>
				<label className="uk-form-label" htmlFor={index}>Question {index + 1}</label>
				<input type="text" onChange={this.handleQuestionChange.bind(this, question.id, 'title')} id={question.id} placeholder="" className="uk-width-6-10" value={question.title} />
				<select className="uk-width-3-10 uk-margin-left" value={question.type} onChange={this.handleQuestionChange.bind(this, question.id, 'type')}>
		            <option value="short">Short answer</option>
		            <option value="long">Long answer</option>
		        </select>
			    <a onClick={FormActionCreators.deleteFormQuestion.bind(null, question.id)} className="uk-close uk-margin-left"></a>
			</div>
		));
	}
}

const dragHigherOrderQuestion = DragSource('question', dragSpec, dragCollect)(FormQuestion);
const dropHigherOrderQuestion = DropTarget('question', dropSpec, dropCollect)(dragHigherOrderQuestion);
export default dropHigherOrderQuestion;