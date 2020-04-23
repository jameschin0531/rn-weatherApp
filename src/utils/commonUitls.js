export function returnWeatherData(data) {
	const { dt, weather, temp } = data;
	const currentTimestamp = dt ? new Date(dt * 1000).toUTCString() : '';
	return {  currentTimestamp, temp, weather }
}