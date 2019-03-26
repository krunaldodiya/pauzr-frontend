import { Container } from 'native-base';
import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import SideMenu from 'react-native-side-menu';
import TopBar from '../TopBar';
import Menu from './menu';

const SideDrawer = props => {
  const { drawer, toggleDrawer } = props;

  return (
    <SideMenu
      menu={<Menu {...props} />}
      openMenuOffset={Dimensions.get('window').width * 0.75}
      isOpen={drawer.isOpen}
      onChange={() => {
        if (drawer.isOpen) {
          toggleDrawer({ isOpen: false });
        }
      }}
      style={{ flex: 1 }}
    >
      <TopBar {...props} />
      <ScrollView style={{ flex: 1 }}>
        <Container style={{ flex: 1 }}>{props.children}</Container>
      </ScrollView>
    </SideMenu>
  );
};

export default SideDrawer;
