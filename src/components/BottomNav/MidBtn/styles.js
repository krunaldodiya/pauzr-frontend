import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleButton: {
    elevation: 10,
    zIndex: 10,

    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleIcon: {
    fontSize: 30,
    color: 'white'
  },
  actionsWrapper: {
    position: 'absolute',
    bottom: 0,
    width:400,
    height:100,
    backgroundColor:"green"
  },
  actionContainer: {
    position: 'absolute',
    backgroundColor:"green"

  },
  actionContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
