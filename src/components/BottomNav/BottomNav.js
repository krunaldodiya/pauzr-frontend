import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon } from 'native-base';
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
          <Button onpress={() => this.props.navigation.push('Profile')}>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
