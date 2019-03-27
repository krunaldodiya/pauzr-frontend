import { Button, Footer, FooterTab, Text } from 'native-base';
import React, { Component } from 'react';

export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: '#000' }}>
          <Button>
            <Text>Home</Text>
          </Button>
          <Button>
            <Text>Timer</Text>
          </Button>
          <Button>
            <Text>Rewards</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
