import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import handler from "../routerHandler";
import styles from "./styles";
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      
        <Footer style={styles.bottomNav}>
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
              <Icon name="person" onPress={()=>{this.props.navigation.push("Welcome")}}/>
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
     
    );
  }
}