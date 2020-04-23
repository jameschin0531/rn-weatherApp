import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from './weatherItem.style'
import { ListItem, Icon } from 'react-native-elements'
import { primaryRed } from '../../assets/plugins/colours'

import { returnWeatherData } from '../../utils/commonUitls'

const WeatherItem = props => {
	const data = returnWeatherData(props.data);

	return (
		<ListItem
			title={data.currentTimestamp}
			subtitle={data.weather.length > 0 ? `${data.weather[0].description} (${data.temp.min} - ${data.temp.max})` : ''}
			rightIcon={< Icon
				color={primaryRed}
				name='chevron-right' />}
			bottomDivider
		>
		</ListItem>
	);
}

export default WeatherItem;
