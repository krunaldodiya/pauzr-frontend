import { Text, View } from "native-base";
import React from "react";
import styles from "./styles";

class GetStarted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>get started</Text>
      </View>
    );
  }
}

export default GetStarted;
