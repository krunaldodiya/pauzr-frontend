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
    bottom: 0
  },
  actionContainer: {
    position: 'absolute'
  },
  actionContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
