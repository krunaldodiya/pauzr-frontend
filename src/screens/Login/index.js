import React, {Component} from 'react';
import {WebView} from 'react-native';
import {httpUrl} from '../../libs/vars';
export default class LoginWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: httpUrl+'/login/google'}}
        style={{marginTop: 20}}
      />
    );
  }
}