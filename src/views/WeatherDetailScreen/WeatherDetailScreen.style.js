import { primaryGrey, white } from '../../assets/plugins/colours'
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
	weatherDetailsContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: white
	},
	currentTimestamp: {
		marginVertical: '40@s',
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