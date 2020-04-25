import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements'
import style from './weatherInfo.style'

import { returnWeatherData, convertKelvinToFarenheit } from '../../utils/commonUitls'

const WeatherInfo = props => {
	const data = returnWeatherData(props.data);

	return (
		<View style={[style.weatherInfoContainer]}>
			<Text style={[style.dateAndTime]}>{data.currentTimestamp}</Text>
			<Text style={style.temperatureText}>{convertKelvinToFarenheit(data.temp)}</Text>
			<Text style={style.weatherText}>{data.weather.length > 0 ? data.weather[0].description : ''}</Text>
		</View>
	);
}
export default WeatherInfo;
