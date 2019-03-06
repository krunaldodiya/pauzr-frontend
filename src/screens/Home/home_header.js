import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Text,
  View
} from "native-base";
import React from "react";
import styles from "./styles";

class HomeHeader extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
        <Left>
          <Icon
            type="MaterialIcons"
            name="menu"
            style={styles.termsIcon}
            onPress={() => null}
          />
        </Left>

        <Body>
          <View style={{ flexDirection: "row" }}>
            <Text numberOfLines={1} style={styles.termsHeader}>
              CLA
            </Text>
            <Text numberOfLines={1} style={styles.termsHeader}>
              PO
            </Text>
            <Text numberOfLines={1} style={styles.termsHeader}>
              OF
            </Text>
          </View>
        </Body>

        <Right>
          <Icon
            type="MaterialIcons"
            name="my-location"
            style={styles.termsIcon}
            onPress={() => navigation.replace("ManageLocationScreen")}
          />
        </Right>
      </Header>
    );
  }
}

export default HomeHeader;
