import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class LoginWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://www.pauzr.com/login/google'}}
        style={{marginTop: 20}}
      />
    );
  }
}