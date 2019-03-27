import { Container, Content } from 'native-base';
import React from 'react';
import FooterTabs from '../FooterTabs';
import TopBar from '../TopBar';

const SideDrawer = props => {
  return (
    <Container style={{ flex: 1 }}>
      <TopBar {...props} />
      <Content contentContainerStyle={{ flex: 1 }}>{props.children}</Content>
      <FooterTabs />
    </Container>
  );
};

export default SideDrawer;
