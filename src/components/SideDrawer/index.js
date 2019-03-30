import { Container, Content, View } from 'native-base';
import React from 'react';
import FooterBack from '../FooterTabs/FooterBack';
import TopBar from '../TopBar';

const SideDrawer = props => {
  console.log(props);

  return (
    <View style={{ flex: 1 }}>
      <Container style={{ flex: 1, backgroundColor: '#000' }}>
        <TopBar {...props} />
        <Content
          contentContainerStyle={{
            flex: 1,
            zIndex: 0,
            elevation: 0,
            padding: 8,
            backgroundColor: '#000'
          }}
        >
          {props.children}
        </Content>

        <FooterBack {...props} />
      </Container>
    </View>
  );
};

export default SideDrawer;
