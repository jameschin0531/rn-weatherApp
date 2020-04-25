import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import { returnWeatherData, formatDate, convertKelvinToFarenheit } from '../../utils/commonUitls'
import { primaryRed } from '../../assets/plugins/colours'

import styles from './weatherList.style'

const WeatherList = props => {
	const data = returnWeatherData(props.data);
	return (
		<TouchableOpacity style={[styles.weatherInfoOuterContainer]} onPress={() => props.navigation.navigate('WeatherDetails', { data })} >
			<View style={[styles.weatherInfoContainer]}>
				<View>
					<Text style={[styles.currentTimestamp]}>{formatDate(data.currentTimestamp)}</Text>
					<Text style={[styles.temperatureText]}>{convertKelvinToFarenheit(data.temp.min)} - {convertKelvinToFarenheit(data.temp.max)}</Text>
					<Text style={[styles.weatherText]}>{data.weather.length > 0 ? data.weather[0].description : ''}</Text>
				</View>
				< Icon
					style={[styles.chevron]}
					color={primaryRed}
					name='chevron-right' />
			</View>
		</TouchableOpacity>
	);
}


export default WeatherList;
