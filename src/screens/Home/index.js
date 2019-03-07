import { Text, View } from "native-base";
import {Button} from "react-native";
import React from "react";
import styles from "./styles";
import handler from "../../components/routerHandler";
import BottomNav from "../../components/BottomNav/BottomNav";
class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>home</Text>
        <BottomNav></BottomNav>
      </View>
    );
  }
}

export default Home;
