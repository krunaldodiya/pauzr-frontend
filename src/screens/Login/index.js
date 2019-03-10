import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class LoginWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://'}}
        style={{marginTop: 20}}
      />
    );
  }
}