import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

class Header extends React.Component {
  render() {
    const { auth, updateAuthUser, navigation } = this.props;
    const { authUser } = auth;

    return (
      <View style={styles.termsWrapper}>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.termsHeader}>Edit Profile</Text>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            updateAuthUser({
              authUser,
              navigation
            })
          }
        >
          <Text style={styles.submitButtonText}>FINISH</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
