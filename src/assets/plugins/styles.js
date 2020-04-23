import {
  StyleSheet
} from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import {
  primaryOrange,
  white,
  secondaryGrey,
  secondaryOrange,
  black,
  blue
} from './colours';

export default StyleSheet.create({
  pageTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(60),
    marginBottom: scale(20)
  },
  pageTitle: {
    fontSize: scale(20),
    fontWeight: '700',
  },
  funcButton : {
    margin:5,
    width: scale(150),
    height: scale(150),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondaryGrey
  },
  textTitle: {
    fontSize: scale(16)
  },
  modalWrapper: {
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  modalViewContainer: {
    backgroundColor: white,
    borderRadius: 10,
    marginHorizontal: scale(20),
    paddingHorizontal: scale(15),
    paddingVertical: scale(25)
  },
  shadow: {
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.46,
    elevation: 20
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(15)
  },
  imgWarning: {
    height: scale(25),
    width: scale(25),
    marginRight: scale(10)
  },
  modalViewTitle: {
    color: secondaryOrange,
    fontSize: moderateScale(20)
  },
  modalViewText: {
    marginBottom: scale(30),
    color: black,
    fontSize: moderateScale(15)
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: scale(290),
    marginLeft: scale(-20)
  },
  button1: {
    width: scale(180),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText1: {
    fontSize: moderateScale(16),
    color: white
  },
  button2: {
    width: scale(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonOrange1: {
    // width: scale(110),
    height: scale(35),
    backgroundColor: primaryOrange,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOrange2: {
    // width: scale(180),
    height: scale(30),
    backgroundColor: primaryOrange,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tncWrapper: {
    marginVertical: scale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: "wrap"
  },
  modalViewText2: {
    color: black,
    fontSize: moderateScale(13),
    lineHeight: moderateScale(22)
  },
  modalViewTextURL: {
    color: blue,
    textDecorationLine: 'underline',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(22)
  },
  btnWrapper2: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: scale(290),
    marginTop: scale(25),
    marginLeft: scale(-20)
  }
});