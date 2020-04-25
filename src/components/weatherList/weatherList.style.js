import { primaryGrey, secondaryGrey } from '../../assets/plugins/colours'
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
	weatherInfoOuterContainer: {
		borderBottomColor: secondaryGrey,
		borderBottomWidth: '0.5@s'
	},
	weatherInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: '20@s',
		marginBottom: '20@s',
		marginTop: '10@s'
	},
	currentTimestamp: {
		textAlign: 'center',
		fontSize: '15@s',
		fontWeight: 'bold',
	},
	weatherText: {
		color: primaryGrey,
		fontSize: '12@s'
	},
	temperatureText: {
		fontSize: '14@s',
		fontWeight: '700',
	},
	chevron: {
		fontSize: '20@s'
	}
});

export default styles;