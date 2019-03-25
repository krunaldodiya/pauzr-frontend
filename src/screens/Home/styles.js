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
  },
  greeting:{
    padding:20,
    backgroundColor:"#000000",
  },
  greetingSmall:{
    fontFamily:theme.fonts.TitilliumWebSemiBold,
    fontSize:16,
    color:"#FFC107",

  },
  
  greetingBig:{
    fontFamily:theme.fonts.Digital7,
    fontSize:24,
    fontWeight:"bold",
    color:"#FFFFFF",
  

  }
});
