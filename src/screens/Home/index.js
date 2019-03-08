import { Container, Content, Body, Button, Card, CardItem, Header } from 'native-base';
import React from 'react';
import styles from './styles';
import { Text } from 'react-native';
import BottomNav from '../../components/BottomNav/BottomNav';
class Home extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header />
        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem header>
              <Text>Card</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>This screen is for showing Home</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Button
            style={styles.button}
            full
            onPress={() => {
              this.props.navigation.push('Home');
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Continue</Text>
          </Button>
        </Content>
        <BottomNav />
      </Container>
    );
  }
}

export default Home;
