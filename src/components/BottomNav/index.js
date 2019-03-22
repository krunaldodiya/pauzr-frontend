import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import React, { Component } from 'react';
import styles from './styles';

export default class BottomNav extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Footer style={styles.footerContainer}>
        <FooterTab style={styles.footer}>
          <Button style={styles.button} onPress={() => navigation.replace('Home')}>
            <Icon style={styles.icon} name="home" />
            <Text style={styles.buttonText}>Home</Text>
          </Button>
          <Button style={styles.buttonMid} onPress={() => navigation.replace('Timer')}>
            <Icon style={styles.iconMid} name="close" />
          </Button>
          <Button style={styles.button} onPress={() => navigation.replace('Rewards')}>
            <Icon style={styles.icon} name="apps" />
            <Text style={styles.buttonText}>Rewards</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
