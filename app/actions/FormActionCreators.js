import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

export default {
	addFormQuestion () {
		AppDispatcher.dispatch({
			type : constants.ADD_FORM_QUESTION
		});
	},
	deleteFormQuestion (index) {
		AppDispatcher.dispatch({
			type : constants.DELETE_FORM_QUESTION,
			index : index
		});
	},
	editFormQuestion (index, field, value) {
		AppDispatcher.dispatch({
			type : constants.EDIT_FORM_QUESTION,
			index : index,
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
	}
};