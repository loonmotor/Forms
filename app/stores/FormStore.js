import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import update from 'react-addons-update';

let defaultForm = () => ({
	title       : '',
	description : '',
	questions   : [
		// { title : 'abc', answer : '', type : 'long' },
		// { title : 'def', answer : '', type : 'long' },
		// { title : 'ghi', answer : '', type : 'long' },
		// { title : 'jkl', answer : '', type : 'long' },
		// { title : 'mno', answer : '', type : 'long' }
	]
});

let defaultQuestion = () => ({
	id : Date.now(),
	title : '',
	answer : '',
	type : 'short'
});

class FormStore extends ReduceStore {
	getInitialState () {
		return defaultForm();
	}
	getQuestionIndex (id) {
		return this._state.questions.findIndex(question => question.id === id);
	}
	reduce (state, action) {
		switch (action.type) {
			case constants.ADD_FORM_QUESTION :
				return update(this.getState(), {
					questions : {
						$push : [defaultQuestion()]
					}
				});
			case constants.DELETE_FORM_QUESTION :
				return update(this.getState(), {
					questions : {
						$splice : [[this.getQuestionIndex(action.id), 1]]
					}
				});
			case constants.EDIT_FORM_QUESTION :
				return update(this.getState(), {
					questions : {
						[this.getQuestionIndex(action.id)] : {
							[action.field] : {
								$set : action.value
							}
						}
					}
				});
			case constants.UPDATE_QUESTION_POSITION :
				if (action.id !== action.afterId) {
					let question = this.getState().questions[this.getQuestionIndex(action.id)];
					return update(this.getState(), {
						questions : {
							$splice : [[this.getQuestionIndex(action.id), 1], [this.getQuestionIndex(action.afterId), 0, question]]
						}
					});
				}
			case constants.EDIT_FORM_FIELD :
				return update(this.getState(), {
					[action.field] : {
						$set : action.value
					}
				});
			default :
				return state;
		}
	}
}

export default new FormStore(AppDispatcher);