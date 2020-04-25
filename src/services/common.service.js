import { Alert } from 'react-native';


export function isSuccessResponse(response) {
	const res = response.data;
	let valid = false;
	if (res?.responseCode) {
		const resCode = successResponseCode.find(
			status => status === res.responseCode,
		);
		if (resCode) {
			valid = true;
		} else {
			valid = false;
		}
	} else {
		valid = response.status === 200 || false;
	}

	return valid;
}

let alertShown = false;
export function showAlert(title, msg) {
	let content = msg;
	if (typeof msg === 'object') {
		try {
			content = JSON.stringify(msg);
		} catch (e) {
			console.log('error', e);
		}
	}
	if (!alertShown) {
		alertShown = true;
		Alert.alert(
			title,
			content,
			[{ text: 'OK', onPress: () => (alertShown = false) }],
			{
				cancelable: false,
			},
		);
	}
}