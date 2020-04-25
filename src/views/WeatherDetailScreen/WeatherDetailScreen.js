import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

// utils
import { formatDate, convertKelvinToFarenheit } from '../../utils/commonUitls'

// styles
import styles from './WeatherDetailScreen.style'


export default function WeatherDetailScreen({ route, navigation }) {

	const { data } = route.params;

	return (
		<View style={styles.weatherDetailsContainer}>
			<Text style={[styles.currentTimestamp]}>{formatDate(data.currentTimestamp)}</Text>
			<Text style={[styles.temperatureText]}>{convertKelvinToFarenheit(data.temp.min)} - {convertKelvinToFarenheit(data.temp.max)}</Text>
			<Text style={[styles.weatherText]}>{data.weather.length > 0 ? data.weather[0].description : ''}</Text>
		</View>
	);
}
