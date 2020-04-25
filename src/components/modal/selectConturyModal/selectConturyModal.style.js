import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		margin: 40,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 40,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	openButton: {
		backgroundColor: "#F194FF",
		borderRadius: 20,
		paddingHorizontal: '30@s',
		paddingVertical: '10@s',
		elevation: 2,
		marginVertical: '10@s'
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		fontSize: '16@s'
	}
});

export default styles;