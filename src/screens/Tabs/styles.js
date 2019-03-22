import { StyleSheet } from 'react-native';

const bigBubbleSize = 100;

export default StyleSheet.create({
  bigBubble: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: bigBubbleSize,
    width: bigBubbleSize,
    borderRadius: bigBubbleSize / 2,
    top: -30
  }
});
