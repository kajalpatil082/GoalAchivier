import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Dimensions
} from "react-native";
import ImageZoom from 'react-native-image-pan-zoom';
 
class Achivments extends Component {
  render() {
    return (
      <View style={firstStyle.container}>
        {/* <Image
          source={require("../images/Achivments.jpeg")}
          resizeMode={'center'}
          style={{ width:'100%',height:'100%' }}
        /> */}
        <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={Dimensions.get('window').width*0.9}
                       imageHeight={Dimensions.get('window').height*0.9}>
                 <Image
          source={require("../images/Achivments.jpeg")}
          resizeMode={'contain'}
          style={{ width:'100%',height:'100%' ,marginTop:-70}}
        /> 
         </ImageZoom>
      </View>
    );
  }
}
const firstStyle = StyleSheet.create({
  container: {
     flex: 1,
    
  },
});

export default Achivments;
