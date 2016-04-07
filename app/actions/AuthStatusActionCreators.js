import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

export default {
	setAuthStatus (value) {
		AppDispatcher.dispatch({
			type : constants.SET_AUTH_STATUS,
			authStatus : value
		});
	}
};