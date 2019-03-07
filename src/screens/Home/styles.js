import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontWeight: '400',
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: 'pink',
    fontSize: 18
  },
  bottomNav: {
    position: 'relative',
    bottom: 0,
    flex: 1
  }
});
