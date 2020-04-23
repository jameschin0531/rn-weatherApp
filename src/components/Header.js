import React from 'react';
import { Header } from 'react-native-elements';
import { primaryRed } from '../assets/plugins/colours';
import { View } from 'react-native';

const AppHeader = props => {
	return (
		<Header
			backgroundColor={primaryRed}
			centerComponent={{ text: 'Singapore', style: { color: '#fff' } }}
			containerStyle={{ height: 50 }}
		/>
	);
}
export default AppHeader;