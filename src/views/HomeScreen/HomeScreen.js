import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

// component
import WeatherInfo from '../../components/weatherInfo/weatherInfo';
import WeatherList from '../../components/weatherList/weatherList'

// constant and api
import { LOCATION, APP_ID } from '../../assets/plugins/constants'
import { callWeatherData } from '../../services/api.service'

export default function HomeScreen({ navigation, countryState }) {

	const [dailyWeatherData, setDailyWeatherData] = useState([]);
	const [currrentWeatherData, setCurrentWeatherData] = useState();
	const [country, setContury] = countryState;


	useEffect(() => {
		console.log('trigger');
		const params = {
			lat: LOCATION[country].lat,
			lon: LOCATION[country].lon,
			appid: APP_ID
		}

		callWeatherData(params).then(res => {
			setDailyWeatherData(res.daily);
			setCurrentWeatherData(res.current);
		}).catch(err => {
			console.log(err)
		});

	},[country]);

	return (
		<>
			<View style={styles.container}>
				<WeatherInfo data={currrentWeatherData || { dt: '', weather: '', temp: '' }} />
				<ScrollView>
					{dailyWeatherData.length > 0 && dailyWeatherData.map((item, index) => (
						<WeatherList data={item} key={index} navigation={navigation} />
					))}
				</ScrollView>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
