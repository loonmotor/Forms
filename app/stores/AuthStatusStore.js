import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

class AuthStatusStore extends ReduceStore {
	getInitialState () {
		return false;
	}
	reduce (state, action) {
		switch (action.type) {
			case constants.SET_AUTH_STATUS :
				return action.authStatus;
			default :
				return state;
		}
	}
}

export default new AuthStatusStore(AppDispatcher);