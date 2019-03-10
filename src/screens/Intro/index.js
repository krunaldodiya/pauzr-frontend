import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Container, Header, Content, Body, Button, Card, CardItem } from 'native-base';
export default class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem header>
              <Text>Card</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>This screen is for showing App Intro</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
        <Button
          style={styles.button}
          full
          onPress={() => {
            this.props.navigation.push('Home');
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Continue</Text>
        </Button>
      </Container>
    );
  }
}
