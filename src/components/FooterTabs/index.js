import { Button, Footer, FooterTab, Text } from 'native-base';
import React, { Component } from 'react';

export default class FooterTabs extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Footer>
        <FooterTab style={{ backgroundColor: '#000' }}>
          <Button onPress={() => navigation.replace('Home')}>
            <Text>Home</Text>
          </Button>
          <Button onPress={() => navigation.replace('Timer')}>
            <Text>Timer</Text>
          </Button>
          <Button onPress={() => navigation.navigate('EditProfile')}>
            <Text>Rewards</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
