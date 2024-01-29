const call = ({ url, method, body, jwt }) => {
	if (method == undefined) {
		method = 'GET'
	}

	if (typeof method == 'object') {
		body = method
	}

	 const requestOptions = {
		method: method,
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
	}

	if (body) {
		requestOptions.body = JSON.stringify(body)
	}

	if (jwt) {
		requestOptions.headers['Authorization'] = 'Bearer ' + jwt
	}

	return fetch(url, requestOptions).then(response => response && response.json())
}

export default call