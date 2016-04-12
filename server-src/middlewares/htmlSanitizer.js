import sanitizeHtml from 'sanitize-html';

export default () => {
	return (req, res, next) => {
		const iterator = obj => {
			if (Object.prototype.toString.call(obj) === '[object Object]') {
				Object.keys(obj).forEach(key => {
					if (typeof obj[key] === 'string' || obj[key] instanceof String) {
						return obj[key] = sanitizeHtml(obj[key], {
							allowedTags : []
						});
					}
					if (Object.prototype.toString.call(obj[key]) === '[object Object]' ||
						Object.prototype.toString.call(obj[key]) === '[object Array]') {
						return iterator(obj[key]);
					}
				});
				return;
			}
			if (Object.prototype.toString.call(obj) === '[object Array]') {
				obj.forEach((elem, index) => {
					if (typeof elem === 'string' || elem instanceof String) {
						return obj[index] = sanitizeHtml(obj[index], {
							allowedTags : []
						});
					}
					if (Object.prototype.toString.call(elem) === '[object Object]' ||
						Object.prototype.toString.call(elem) === '[object Array]') {
						return iterator(obj[index]);
					}
				});
				return;
			}
		}

		iterator(req.body);

		next();
	}
};