import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Dimensions
} from "react-native";

import Styles from "../styles/styles";
import SliderScreen from '../components/slideScreen/Sliders'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class welcomeScreen extends Component {
  state = {
    token: null,
  };

 
  async componentDidMount() {
   
  }

  render() {
   
    return (
      <View style={Styles.mainContainer}>
        <StatusBar barStyle="default" />
        <View style={{height:"50%",}}>
        <SliderScreen/>
        </View>
      
<View style={{flexDirection:'row',justifyContent:'space-around',height:"23%"}}>
  <View  style={{flexDirection:'column',margin:10,width:'50%'}}>
  <Image
   resizeMode={'contain'}
          source={require("../images/rahul.jpeg")}
          style={{ width: "100%", height:"90%",padding:5}}
        />
        <Text style={Styles.heading}> Er.Rahul Bhamare</Text>
  </View>
       
  <View  style={{flexDirection:'column',margin:10,width:'50%'}}>
 <Image
   resizeMode={'contain'}
          source={require("../images/deepak.jpeg")}
          style={{ width: "100%", height:"90%",padding:5}}
        />
          <Text style={Styles.heading}>Er.Dipak Yadav </Text>
  </View>
      
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',height:"23%",}}>
        <View  style={{flexDirection:'column',margin:10,width:'50%'}}>
  <Image
  resizeMode={'contain'}
          source={require("../images/utube2.jpeg")}
          style={{ width: "100%", height:"90%",padding:5}}
        />
          <Text style={Styles.heading}>Er.Ajay Tayde</Text>
  </View>
       
  <View  style={{flexDirection:'column',margin:10,width:'50%'}}>
  
  <Image
   resizeMode={'contain'}
          source={require("../images/utube1.jpeg")}
          style={{ width: "100%", height:"90%",padding:5}}
        />
          <Text style={Styles.heading}>Er.Ritesh Salve</Text>
  </View>
      
        </View>
      
                </View>
    );
  }
}

export default welcomeScreen;
