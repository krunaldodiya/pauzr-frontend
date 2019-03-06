import { StyleSheet } from "react-native";
import theme from "../../libs/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  termsWrapper: {
    backgroundColor: "#d80402"
  },
  termsIcon: {
    color: "white",
    marginRight: 5
  },
  termsHeader: {
    fontWeight: "400",
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: "white",
    fontSize: 18
  },
  termsBody: {
    flex: 1
  },
  items: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20
  }
});
