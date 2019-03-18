import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  content:{
    flex:1,
    backgroundColor:"transparent",
    justifyContent:"center",
    alignItems:"center",
  },
  text: {
    color: '#fff',
    fontFamily: theme.fonts.TitilliumWebRegular,
  },
  tickTock:{
    height:250,
    width:250,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue",
  }
});
