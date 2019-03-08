import React from 'react';
import { Container, Header, Content, Body, CheckBox, ListItem, Button } from 'native-base';
import { Text } from 'react-native';
import styles from './styles';
import TNCText from '../../components/TncText';
export default class TermsNConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: true
    };
    this.checkboxHandler = this._checkboxHandler.bind(this);
  }
  _checkboxHandler() {
    if (!this.state.checkbox) {
      this.setState({
        checkbox: true
      });
    } else {
      this.setState({
        checkbox: false
      });
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body style={styles.body}>
            <Text style={styles.title}>Terms and Conditions</Text>
          </Body>
        </Header>
        <Content style={styles.content}>
          <TNCText />
        </Content>
        <ListItem>
          <CheckBox
            style={styles.checkbox}
            checked={this.state.checkbox}
            color={'#512DA8'}
            onPress={() => this.checkboxHandler()}
          />
          <Body>
            <Text>I accept the Terms and Conditions provided above.</Text>
          </Body>
        </ListItem>
        <Button
          style={styles.button}
          full
          onPress={() => {
            this.props.navigation.push('AppIntro');
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Continue</Text>
        </Button>
      </Container>
    );
  }
}
