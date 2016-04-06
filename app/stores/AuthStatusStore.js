import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

class AuthStatusStore extends ReduceStore {
	getInitialState () {
		return false;
	}
	reduce (state, action) {
		switch (action.type) {
			case constants.GET_LOGIN_STATUS_SUCCESS :
				return action.payload.response.status;
			case constants.GET_LOGIN_STATUS_ERROR :
				return action.payload.response.status;
			default :
				return state;
		}
	}
}

export default new AuthStatusStore(AppDispatcher);