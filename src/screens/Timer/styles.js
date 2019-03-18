import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  header:{
    backgroundColor:"transparent",
  },
  content:{
    flex:1,
    backgroundColor:"transparent",
    justifyContent:"flex-start",
    alignItems:"center",
    padding:20,
  },
  text: {
    color: '#fff',
    fontFamily: theme.fonts.TitilliumWebRegular,
  },
  tickTock:{
    
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center",
    zIndex:0,
    borderWidth:2,
    borderColor:"red",
  },
  timerBox:{
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    zIndex:1,
    borderWidth:2,
    borderColor:"green",
  },
  innerCircle:{
    borderRadius:100,
    height:200,
    width:200,
    borderWidth:3,
    borderColor:"#ffffff",
    zIndex:2,
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    top:"50%",
    transform:[{
      translateY:-100,
    }],
    backgroundColor:"teal"
   
    
  },
  timerText:{
    fontSize:45,
    fontWeight:"bold",
    color:"#ffffff",
    fontFamily:theme.fonts.TitilliumWebRegular,
    justifyContent:"center",
    alignItems:"center",
    zIndex:2,
  }
});
