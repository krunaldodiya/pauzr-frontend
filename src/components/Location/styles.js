import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  wrapper: errors => {
    return {
      width: 250,
      borderColor: errors ? '#e74c3c' : 'gray',
      borderWidth: 1,
      borderRadius: 20
    };
  },

  input: errors => {
    return {
      width: 200,
      padding: 5,
      paddingLeft: 20,
      color: '#000',
      alignSelf: 'center',
      fontFamily: theme.fonts.TitilliumWebRegular,
      fontSize: 14
    };
  },

  suggestionWrapper: {
    flexGrow: 1,
    width: 250,
    paddingHorizontal: 10
  },

  suggestions: {
    padding: 10,
    color: '#333',
    fontFamily: theme.fonts.TitilliumWebRegular,
    fontSize: 14
  }
});
