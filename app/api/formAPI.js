import 'whatwg-fetch';

export default {
	createForm () {
		return fetch('/data/form', { 
			method : 'POST',
			credentials : 'same-origin'
		}).then(response => response.json());
	},
	fetchForm (id) {
		return fetch(`/data/form/${id}`, {
			credentials : 'same-origin'
		}).then(response => response.json());
	},
	editForm (form) {
		return fetch(`/data/form/${form.shortId}`, {
			method : 'PUT',
			body : JSON.stringify(form),
			credentials : 'same-origin',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(response => response.json());
	}
};