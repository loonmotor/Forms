import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

class AuthStatusStore extends ReduceStore {
	getInitialState () {
		return false;
	}
	reduce (state, action) {
		switch (action.type) {
			case constants.FETCH_AUTH_STATUS_SUCCESS :
				return action.payload.response.authStatus;
			case constants.SIGN_OUT_SUCCESS :
				return false;
			default :
				return state;
		}
	}
}

export default new AuthStatusStore(AppDispatcher);