import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  buttonText: {
    color: '#607D8B',
    fontFamily: theme.fonts.TitilliumWebRegular
  },
  footerContainer: {
    backgroundColor: 'transparent',
    height: 70
  },
  footer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#ffffff',
    elevation: 1,
    zIndex: 1,
    display: 'flex'
  },
  buttonMid: {
    backgroundColor: 'red',
    marginBottom: 60,
    elevation: 3,
    zIndex: 3,
    height: 70,
    width: 70,
    borderRadius: 10
  },
  icon: {
    color: '#607D8B',
    fontSize: 30
  },
  iconMid: {
    fontSize: 40,
    color: '#ffffff'
  }
});
