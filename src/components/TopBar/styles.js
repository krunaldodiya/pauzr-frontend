import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#000000',
    color: '#ffffff',
    elevation: 5,
    zIndex: 5
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    zIndex: 2
  },
  name: {
    justifyContent: 'center',
    marginLeft: 15,
    fontSize: 18,
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: '#ffffff'
  }
});
