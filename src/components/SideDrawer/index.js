import { Container, Content,View } from 'native-base';
import React from 'react';
import FooterTabs from '../FooterTabs';
import TopBar from '../TopBar';

const SideDrawer = props => {

  return (
    <View style={{flex:1}}>    
    <Container style={{ flex: 1 }}>
      <TopBar {...props} />
      <Content contentContainerStyle={{ flex: 1,zIndex:1,elevation:1, }}>{props.children}
      <FooterTabs  isOpen={false} style={{elevation:999,zIndex:999,}} {...this.props}/>
      </Content>
      </Container>
   
    </View>

  );
};

export default SideDrawer;
