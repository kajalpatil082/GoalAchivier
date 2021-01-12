import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class  MyWebComponent extends Component {
  render() {
    return <WebView source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSeBn3iLk12T9fIJUAZ0px-GX-R3cl4lK7BlQZI3b3d1oSaPEw/viewform?usp=sf_link' }} />;
  }
}