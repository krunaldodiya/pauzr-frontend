import { Container } from 'native-base';
import React, { Component } from 'react';
import { Text } from 'react-native';
import BottomNav from '../../components/BottomNav/BottomNav';
import styles from './styles';
export default class Profile extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>Profile</Text>
        <BottomNav />
      </Container>
    );
  }
}
