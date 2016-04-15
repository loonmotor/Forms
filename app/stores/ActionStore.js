import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import update from 'react-addons-update';

class ActionStore extends ReduceStore {
	getInitialState () {
		return [];
	}
	reduce (state, action) {
		return update(this.getState(), {
			$push : [action]
		});
	}
}

export default new ActionStore(AppDispatcher);