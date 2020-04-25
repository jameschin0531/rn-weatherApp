import { primaryGrey } from '../../assets/plugins/colours'
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
	weatherInfoContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '20@s',
		marginBottom: '30@s',
	},
	dateAndTime: {
		textAlign: 'center',
		fontSize: '18@s',
		fontWeight: 'bold',
	},
	weatherText: {
		color: primaryGrey,
		fontSize: '25@s'
	},
	temperatureText: {
		fontSize: '35@s',
		fontWeight:'bold',
		marginTop: '10@s'
	}
});
