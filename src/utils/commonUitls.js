import moment from 'moment'

export function returnWeatherData(data) {
	const { dt, weather, temp } = data;
	const currentTimestamp = dt ? new Date(dt * 1000).toUTCString() : '';
	return {  currentTimestamp, temp, weather }
}

export function formatDate(date) {
	return moment(date).format('DD MMM YYYY, ddd');
}

export function convertKelvinToFarenheit(kelvin) {
	return parseInt(((kelvin-273.15)*1.8)+32);
}