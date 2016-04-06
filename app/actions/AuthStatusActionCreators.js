import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

let AuthStatusActionCreators = {
	getAuthStatus (promise) {
		AppDispatcher.dispatchAsync(promise, {
			request : constants.GET_LOGIN_STATUS,
			success : constants.GET_LOGIN_STATUS_SUCCESS,
			error   : constants.GET_LOGIN_STATUS_ERROR
		});
	}
};

export default AuthStatusActionCreators;