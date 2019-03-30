import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  activeIcon: {
    backgroundColor:"#ffffff",
    borderColor:"rgb(205,220,57)",
    borderWidth:4,
    width: 80,
    height: 80,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
