import { StyleSheet } from 'react-native';
import theme from '../../../../libs/theme';

export default StyleSheet.create({
  infoWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  infoHeading: {
    fontSize: 26,
    textAlign: 'center',
    color: '#fff',
    fontFamily: theme.fonts.TitilliumWebSemiBold
  },
  infoParagraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 20,
    marginTop: 30,
    fontFamily: theme.fonts.TitilliumWebRegular
  }
});
