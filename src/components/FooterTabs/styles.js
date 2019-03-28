import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    
    backgroundColor: 'green',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    
  }, 
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position:"absolute",
    bottom:0,
    width:"100%",
  },
  icon: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconMid: {
    height: 60,
    width: 60,
    borderRadius: 30,
    elevation: 2,
    zIndex: 2,
    backgroundColor: 'teal',
    marginBottom: 40,
    color: '#ffffff'
  }
});
