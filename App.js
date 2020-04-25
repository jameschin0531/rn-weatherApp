import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import DashbordScreen from './src/views/DashboardScreen/DashboardScreen';
import WeatherDetailScreen from './src/views/WeatherDetailScreen/WeatherDetailScreen';

import { primaryRed } from './src/assets/plugins/colours'

const Stack = createStackNavigator();

const headerStyle = {
	title: 'Singapore',
	headerStyle: {
		backgroundColor: primaryRed
	},
	headerTitleAlign: 'center',
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	}
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HomeScreen">
				<Stack.Screen name="HomeScreen" options={headerStyle}
					component={DashbordScreen} />
				<Stack.Screen name="WeatherDetails" component={WeatherDetailScreen} options={headerStyle} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

