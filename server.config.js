export default {
	url : {
		authStatus : 'http://localhost:3000/auth/status',
		mongodb : 'mongodb://127.0.0.1:27017/forms'
	},
	limit : {
		urlencoded : '1mb',
		jsonencoded : '1mb'
	},
	secret : {
		session : '1FRlUu7Jledo1JOp6otFhCIFddUJEY2m'
	},
	maxAge : {
		session : 604800000,
		static : 0
	},
	credentials : {
		google : {
			clientID     : '860969549387-ssp95mn2558qpskugndod4ja7dmnllu6.apps.googleusercontent.com',
			clientSecret : 'iIrz6F9f0FW-WWIC1xf3Pjjt',
			callbackURL  : 'http://localhost:3000/auth/google/return',
			successRedirect : '/auth/oauth-success'
		},
		facebook : {
			clientID     : '990982040995258',
			clientSecret : 'f320182c7d6773b9c13bb2d2f01cc6b6',
			callbackURL  : 'http://localhost:3000/auth/facebook/return',
			successRedirect : '/auth/oauth-success'
		}
	}
};