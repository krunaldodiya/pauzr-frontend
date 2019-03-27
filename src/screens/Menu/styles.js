import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  mainContent: {
    flex: 1
  },
  image: {
    width: 360,
    height: 360
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: 20,
    fontFamily: theme.fonts.TitilliumWebRegular
  },
  title: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontFamily: theme.fonts.TitilliumWebRegular
  }
});
