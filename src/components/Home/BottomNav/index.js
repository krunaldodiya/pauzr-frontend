import { Button, Footer, FooterTab, Icon,Text } from 'native-base';
import React, { Component } from 'react';
import styles from './styles';

export default class BottomNav extends Component {
  render() {
    return (
      <Footer style={styles.footerContainer}>
        <FooterTab style={styles.footer}>
          <Button style={styles.button}>
            <Icon style={styles.icon} name="home" />
            <Text style={styles.buttonText}>Home</Text>
          </Button>
          <Button style={styles.button}>
            <Icon style={styles.icon} name="apps" />
            <Text style={styles.buttonText}>Home</Text>
          </Button>
          <Button style={styles.buttonMid}>
            <Icon style={styles.iconMid} name="close" />
          </Button>
          <Button style={styles.button}>
            <Icon style={styles.icon} name="apps" />
            <Text style={styles.buttonText}>Home</Text>
          </Button>
          <Button style={styles.button}>
            <Icon style={styles.icon} name="home" />
            <Text style={styles.buttonText}>Home</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
