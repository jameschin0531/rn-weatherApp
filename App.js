import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

// component
import Header from './src/components/Header';
import WeatherInfo from './src/components/weatherInfo/weatherInfo';
import WeatherItem from './src/components/weatherItem/weatherItem';

// constant 
import { LOCATION, APP_ID } from './src/assets/plugins/constants'
import { callWeatherData } from './src/services/api.service'



export default function App() {

	const [dailyWeatherData, setDailyWeatherData] = useState([]);
	const [currrentWeatherData, setCurrentWeatherData] = useState();

	useEffect(() => {

		const params = {
			lat: LOCATION.sg.lat,
			lon: LOCATION.sg.lon,
			appid: APP_ID
		}

		callWeatherData(params).then(res => {
			setDailyWeatherData(res.daily);
			setCurrentWeatherData(res.current);
		}).catch(err => {
			console.log(err)
		});
	}, []);

	return (
		<>
			<View style={styles.container}>
				<Header />

				<WeatherInfo data={currrentWeatherData || { dt: '', weather: '', temp: '' }} />
				<ScrollView>
					{dailyWeatherData.length > 0 && dailyWeatherData.map((item, index) => (
						<WeatherItem data={item} key={index} />
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
