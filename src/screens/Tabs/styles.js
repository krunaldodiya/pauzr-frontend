import { StyleSheet } from 'react-native';

const bigBubbleSize = 80;

export default StyleSheet.create({
  home:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#000",
    flex:1,
  },
  bigBubble: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    height: bigBubbleSize,
    width: bigBubbleSize,
    borderRadius: bigBubbleSize / 2,
    marginBottom:60,
  }
});
