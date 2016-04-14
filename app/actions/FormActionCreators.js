import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {throttle} from '../utils';
import formAPI from '../api/formAPI';

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
			type : constants.EDIT_QUESTION,
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
	},
	toggleFormQuestionRequired (questionId) {
		AppDispatcher.dispatch({
			type : constants.TOGGLE_FORM_QUESTION_REQUIRED,
			questionId : questionId
		});
	},
	createForm () {
		AppDispatcher.dispatchAsync(formAPI.createForm(), {
			request : constants.CREATE_FORM,
			success : constants.CREATE_FORM_SUCCESS,
			error   : constants.CREATE_FORM_ERROR
		});
	},
	editForm (form) {
		AppDispatcher.dispatchAsync(formAPI.editForm(form), {
			request : constants.EDIT_FORM,
			success : constants.EDIT_FORM_SUCCESS,
			error   : constants.EDIT_FORM_ERROR
		});
	},
	fetchForm (id) {
		AppDispatcher.dispatchAsync(formAPI.fetchForm(id), {
			request : constants.FETCH_FORM,
			success : constants.FETCH_FORM_SUCCESS,
			error   : constants.FETCH_FORM_ERROR
		})
	}
};