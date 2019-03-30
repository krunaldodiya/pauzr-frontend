import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 6,
    flex: 1,
    margin: 'auto'
  },
  cardCutLeft: {
    elevation: 3,
    zIndex: 3,
    position: 'absolute',
    backgroundColor: 'green'
  },
  cardCutRight: {
    elevation: 3,
    zIndex: 3,
    position: 'absolute'
  },
  content: {
    flex: 1,
    zIndex: 0,
    elevation: 0,
    padding: 20
  }
});
