import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

import { SliderBox } from "react-native-image-slider-box";
 
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
       
        require('../../images/1.jpg'),
        require('../../images/2.jpg'),
        require('../../images/88.jpeg'),
        //require('../../images/45.jpg'),
        require('../../images/55.jpg'),
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={300}
         // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="yellow"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
           // position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
           // paddingVertical: 10
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
           // marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "yellow"
          }}
          ImageComponentStyle={{ width: '97%', marginTop: 5}}
          imageLoadingColor="#2196F3"
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:300
  }
});