import { Button, Footer, FooterTab, Text } from 'native-base';
import React, { Component } from 'react';
import styles from './styles';

export default class FooterTabs extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Footer style={styles.container}>
        <FooterTab style={styles.footer}>
          <Button style={styles.icon} onPress={() => navigation.replace('EditProfile')}>
            <Text>Home</Text>
          </Button>

          <Button style={styles.icon} onPress={() => navigation.replace('Timer')}>
            <Text>Timer</Text>
          </Button>

          <Button style={styles.icon} onPress={() => navigation.replace('Rewards')}>
            <Text>Rewards</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
