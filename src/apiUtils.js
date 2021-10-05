export const checkError = async response => {
	if (!(response.status >= 200 && response.status < 400)) {
		const { message } = await toJson(response);
		const error = new Error(message);
		throw error;
	}
	return response;
};

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const apiCall = (method, url, payload) => {
	const requestOptions = {
		method: method,
		headers: myHeaders,
		body: JSON.stringify(payload),
		redirect: "follow",
	};

	return fetch(url, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log(error));
};

export const toJson = async response => {
	let resp = await response.text();
	return resp ? JSON.parse(resp) : {};
};

export const GET = async (url, headers = {}) => {
	return req(url, headers, null, "GET");
};

export const PATCH = async (url, headers = {}) => {
	return req(url, headers, null, "DELETE");
};

export const POST = async (url, body, headers = {}) => {
	return req(url, headers, body, "POST");
};

export const PUT = async (url, body = null, headers = {}) => {
	return req(url, headers, body, "PUT");
};

export const DELETE = async (url, body = null, headers = {}) => {
	return req(url, headers, body, "DELETE");
};

const req = async (url, headers, body, method) => {
	return fetch(
		url,
		Object.assign(
			{
				method,
				headers: Object.assign(
					{},
					{
						"Content-Type": "application/json",
						...headers,
					}
				),
			},
			body ? { body: JSON.stringify(body) } : {}
		)
	);
};
