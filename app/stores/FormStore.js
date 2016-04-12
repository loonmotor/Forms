import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import update from 'react-addons-update';

let defaultForm = () => ({
	title       : '',
	description : '',
	questions   : [
		// defaultQuestion()
	]
});

let defaultMultiChoiceOption = () => ({
	id : Date.now(),
	title : ''
});

let defaultQuestion = () => ({
	id : Date.now(),
	title : '',
	answer : '',
	type : 'short',
	options : [defaultMultiChoiceOption()]
});


class FormStore extends ReduceStore {
	getInitialState () {
		return defaultForm();
	}
	getQuestionIndex (id) {
		return this._state.questions.findIndex(question => question.id === id);
	}
	getMultipleChoiceOptionIndex (questionId, optionId) {
		return this._state.questions[this.getQuestionIndex(questionId)].options.findIndex(option => option.id === optionId);
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
			case constants.EDIT_MULTIPLE_CHOICE_OPTION :
				console.log(this.getState());
				let nextState;
				if (action.value.title === '') {
					nextState = update(this.getState(), {
						questions : {
							[this.getQuestionIndex(action.questionId)] : {
								options : {
									$splice : [[this.getMultipleChoiceOptionIndex(action.questionId, action.optionId), 1]]
								}
							}
						}
					});
				}
				if (action.value.title) {
					nextState = update(this.getState(), {
									questions : {
										[this.getQuestionIndex(action.questionId)] : {
											options : {
												[this.getMultipleChoiceOptionIndex(action.questionId, action.optionId)] : {
													title : {
														$set : action.value.title
													}
												}
											}
										}
									}
								});
				}
				if (nextState.questions[this.getQuestionIndex(action.questionId)].options[nextState.questions[this.getQuestionIndex(action.questionId)].options.length - 1].title !== '') {
					nextState = update(nextState, {
						questions : {
							[this.getQuestionIndex(action.questionId)] : {
								options : {
									$push : [defaultMultiChoiceOption()]
								}
							}
						}
					});
				}
				return nextState;
				
			default :
				return state;
		}
	}
}

export default new FormStore(AppDispatcher);