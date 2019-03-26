import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  text: {
    color: '#fff',
    fontFamily: theme.fonts.TitilliumWebRegular,
    padding: 10
  }
});
