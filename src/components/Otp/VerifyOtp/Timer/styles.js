import { StyleSheet } from 'react-native';
import theme from '../../../../libs/theme';

export default StyleSheet.create({
  changeMobileWrapper: {
    alignSelf: 'center'
  },
  changeMobileButton: {
    borderColor: '#fff',
    borderRadius: 5
  },
  changeMobileText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    fontFamily: theme.fonts.TitilliumWebRegular
  },
  timerWrapper: {
    alignSelf: 'center'
  },
  timer: {
    borderWidth: 1,
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderColor: '#fff',
    borderRadius: 40
  },
  timerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    fontFamily: theme.fonts.TitilliumWebSemiBold
  }
});
