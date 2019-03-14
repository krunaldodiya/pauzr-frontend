import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  mainContent: {
    flex: 1
  },
  image: {
    width: 360,
    height: '100%'
  },
  text: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center'
  },
  title: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
    fontFamily: theme.fonts.TitilliumWebRegular
  }
});
