import { StyleSheet } from 'react-native';
import theme from '../../../../libs/theme';

export default StyleSheet.create({
  formWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    justifyContent: 'space-around'
  },
  inputWrapper: {
    borderBottomWidth: 0
  },
  input: errors => {
    return {
      borderColor: errors ? '#e74c3c' : 'white',
      color: '#fff',
      marginHorizontal: 20,
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 20,
      fontFamily: theme.fonts.TitilliumWebRegular
    };
  },
  submitButtonWrapper: {
    marginTop: 30,
    alignSelf: 'center',
    borderBottomWidth: 0
  },
  submitButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  submitButtonDisabled: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff'
  },
  submitButtonText: {
    textAlign: 'center',
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: '#d80402'
  },
  submitButtonTextDisabled: {
    textAlign: 'center',
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: '#ccc'
  }
});
