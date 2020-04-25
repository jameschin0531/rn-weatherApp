import { primaryGrey, secondaryGrey } from '../../assets/plugins/colours'
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
	weatherDetailsContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: '20@s',
		marginBottom: '20@s',
		marginTop: '10@s'
	},
	currentTimestamp: {
		marginVertical: '20@s',
		textAlign: 'center',
		fontSize: '24@s',
		fontWeight: 'bold',
	},
	weatherText: {
		color: primaryGrey,
		fontSize: '20@s'
	},
	temperatureText: {
		marginVertical: '20@s',
		fontSize: '22@s',
		fontWeight: '700',
	}
});

export default styles;