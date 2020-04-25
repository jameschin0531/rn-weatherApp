import axios from 'axios';
import { API_URL } from '../assets/plugins/constants'

export function callWeatherData(params) {
	let paramString = '';

	// create the dynamic params string
	Object.keys(params).forEach((keys, index) => {
		paramString = index == 0 ? `?${keys}=${params[keys]}` : `${paramString}&${keys}=${params[keys]}`
	});
	return new Promise((resolve, reject) => {
		axios.get(API_URL + paramString)
			.then(function (response) {
				// handle success
				resolve(response.data);
			})
			.catch(function (error) {
				// handle error
				reject(error);
			})
	})
}