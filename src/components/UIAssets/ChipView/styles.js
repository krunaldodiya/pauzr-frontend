import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 6,
    flex: 1,
    margin:"auto",
  },
  cardCutLeft: {
    elevation: 3,
    zIndex: 3,
    position: 'absolute'
  },
  cardCutRight: {
    elevation: 3,
    zIndex: 3,
    position: 'absolute'
  },
  content: {
    flex: 1,
    elevation: 2,
    zIndex: 2,
    padding:20,
  }
});