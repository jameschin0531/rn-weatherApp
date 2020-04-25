
import React from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import styles from './selectConturyModal.style'
import { primaryRed } from '../../../assets/plugins/colours'

export default function selectCountryModal(props) {
	const [modalVisible, setModalVisible] = props.modalState;
	const [country, setContury]  = props.countryState;

	const handleModalClick = (countryVal) => {
		setContury(countryVal);
		setModalVisible(!modalVisible);
	}

	return (
		<>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Select Region</Text>

						<TouchableHighlight
							style={{ ...styles.openButton, backgroundColor: primaryRed }}
							onPress={() => handleModalClick('Singapore')}
						>
							<Text style={styles.textStyle}>Singapore</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={{ ...styles.openButton, backgroundColor: primaryRed }}
							onPress={() => handleModalClick('Malaysia')}
						>
							<Text style={styles.textStyle}>Malaysia</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>
		</>
	);
}