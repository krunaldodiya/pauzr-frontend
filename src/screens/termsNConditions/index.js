import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import {Button} from 'react-native';
export default class TermsNConditions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Terms and condition</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Button title="Continue" color="#FFC107" height="58" onPress={()=>{this.props.navigation.push("AppIntro")}} />
      </Container>
    );
  }
}
