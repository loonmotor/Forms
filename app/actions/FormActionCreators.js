import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {throttle} from '../utils';

export default {
	addFormQuestion () {
		AppDispatcher.dispatch({
			type : constants.ADD_FORM_QUESTION
		});
	},
	deleteFormQuestion (id) {
		AppDispatcher.dispatch({
			type : constants.DELETE_FORM_QUESTION,
			id   : id
		});
	},
	editFormQuestion (id, field, value) {
		AppDispatcher.dispatch({
			type : constants.EDIT_FORM_QUESTION,
			id   : id,
			field : field,
			value : value
		});
	},
	editFormField (field, value) {
		AppDispatcher.dispatch({
			type : constants.EDIT_FORM_FIELD,
			field : field,
			value : value
		});
	},
	updateQuestionPosition : throttle((id, afterId) => {
		AppDispatcher.dispatch({
			type : constants.UPDATE_QUESTION_POSITION,
			id   : id,
			afterId : afterId
		});
	}, 500),
	editMultipleChoiceOption (questionId, optionId, value) {
		AppDispatcher.dispatch({
			type : constants.EDIT_MULTIPLE_CHOICE_OPTION,
			questionId : questionId,
			optionId : optionId,
			value : value
		});
	}

};