//import * as Notifications from 'expo-notifications';

import React, { useState, useEffect, useRef } from 'react';

import {AsyncStorage} from 'react-native';
import NavigateScreen from "./navigation/navigationScreen";
import { Component } from 'react';


export default class App  extends Component{
  state = {
    fcmToken:''
  };
  
  render()
  {
    return (<NavigateScreen />);
}
}

