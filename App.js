import React, { useState } from 'react';
import { TouchableOpacity, Modal, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import HomeScreen from './src/views/HomeScreen/HomeScreen';
import WeatherDetailScreen from './src/views/WeatherDetailScreen/WeatherDetailScreen';

// Component
import SelectCountryModal from './src/components/modal/selectConturyModal/selectConturyModal'

// utils
import { primaryRed, white } from './src/assets/plugins/colours'

const Stack = createStackNavigator();


export default function App() {
	const [modalVisible, setModalVisible] = useState(false);
	const [country, setContury] = useState('Singapore');

	const returnHeaderStyle = (type) => {

		return {
			title: type == 'main' ? country : type,
			headerStyle: {
				backgroundColor: primaryRed
			},
			headerTitleAlign: 'center',
			headerTintColor: white,
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerRight: () => (
				type == 'main' &&
				<TouchableOpacity style={{ padding: 10 }}
					onPress={() => {
						setModalVisible(!modalVisible);
					}}>
					< Icon name='menu' color={white} />
				</TouchableOpacity>
			)
		}
	}

	return (
		<>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="HomeScreen">
					<Stack.Screen name="HomeScreen" options={returnHeaderStyle('main')}>
						{props => <HomeScreen {...props} countryState={[country, setContury]} />}
					</Stack.Screen>
					<Stack.Screen name="WeatherDetails" component={WeatherDetailScreen} options={returnHeaderStyle('Weather Details')} />
				</Stack.Navigator>
			</NavigationContainer>
			<SelectCountryModal modalState={[modalVisible, setModalVisible]} countryState={[country, setContury]} />
		</>
	);
}




