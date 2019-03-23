import { StyleSheet } from 'react-native';
import theme from '../../libs/theme';

export default StyleSheet.create({
  wave: {
   
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    zIndex:2,
},
waveBall: {
  width: 200,
  
  borderRadius:100,
    aspectRatio: 1,
    
    overflow: 'hidden',
},
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    backgroundColor: 'transparent'
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  text: {
    color: '#fff',
    fontFamily: theme.fonts.TitilliumWebRegular
  },
  tickTock: {
    backgroundColor: 'transparent',
    zIndex: 0,
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },

  timerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    zIndex: 1,
    borderWidth: 2,
    borderColor: 'transparent'
  },
  innerCircle: {
    borderRadius:100,
    height: 200,
    width: 200,
    borderWidth: 3,
    borderColor: '#ffffff',
    padding:80 ,
    zIndex:4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  innerWaves: {
    borderRadius:90,
    
    height: 180,
    width: 180,
    
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:80,
    
  },
  timerText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: theme.fonts.TitilliumWebRegular,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
    position:"absolute",
  }
});
