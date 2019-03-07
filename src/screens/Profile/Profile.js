import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import BottomNav from '../../components/BottomNav/BottomNav';
import { Container } from 'native-base';
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
