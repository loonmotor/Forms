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
	title : '',
	answer : '',
	type : 'short'
});

class FormStore extends ReduceStore {
	getInitialState () {
		return defaultForm();
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
						$splice : [[action.index, 1]]
					}
				});
			case constants.EDIT_FORM_QUESTION :
				return update(this.getState(), {
					questions : {
						[action.index] : {
							[action.field] : {
								$set : action.value
							}
						}
					}
				});
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