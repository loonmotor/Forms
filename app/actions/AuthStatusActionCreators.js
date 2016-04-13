import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import authStatusAPI from '../api/authStatusAPI';

export default {
	fetchAuthStatus () {
		AppDispatcher.dispatchAsync(authStatusAPI.fetchAuthStatus(), {
			request : constants.FETCH_AUTH_STATUS,
			success : constants.FETCH_AUTH_STATUS_SUCCESS,
			error   : constants.FETCH_AUTH_STATUS_ERROR
		});
	},
	signOut () {
		AppDispatcher.dispatchAsync(authStatusAPI.signOut(), {
			request : constants.SIGN_OUT,
			success : constants.SIGN_OUT_SUCCESS,
			error   : constants.SIGN_OUT_ERROR
		});
	}
};