import { Button, Footer, FooterTab, Icon } from 'native-base';
import React, { Component } from 'react';

export default class BottomNav extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button onPress={() => this.props.navigation.push('Profile')}>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
