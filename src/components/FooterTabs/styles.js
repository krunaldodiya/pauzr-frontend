import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 70
  }, 
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center'
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
