import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import handler from "../routerHandler";
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="apps" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" onPress={handler('push','Profile')}/>
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}