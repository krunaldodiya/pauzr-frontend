import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
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
      </Container>
    );
  }
}
