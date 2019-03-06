import { Text, View } from "native-base";
import React from "react";
import styles from "./styles";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>home</Text>
      </View>
    );
  }
}

export default Home;
