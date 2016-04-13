import 'whatwg-fetch';

export default {
	fetchAuthStatus () {
		return fetch('/auth/status', {
			credentials : 'same-origin'
		}).then(response => response.json());
	},
	signOut () {
		return fetch('/auth/sign-out', {
			credentials : 'same-origin'
		}).then(response => response.json());
	}
}