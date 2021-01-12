import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { ViewColor, btnColor } from "../../constants/color";

class FirstScreen extends Component {
  render() {
    return (
      <View style={firstStyle.container}>
        <Image
          source={require("../../app-assets/splash2.png")}
          resizeMode={'center'}
          style={{ backgroundColor: ViewColor,width:200,height:200 }}
        />
        <Text style={{ fontSize: 23, fontWeight: "bold", color: "#FFFFFF" }}>
        Goal Achiever Academy
        </Text>
        <Text style={{ fontSize: 18, color: "#FFFFFF" }}>
          {" "}
       Quality Never Compromise{" "}
        </Text>
      </View>
    );
  }
}
const firstStyle = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 50,
    backgroundColor: "#5B2087",
    alignItems: "center",
    alignContent: "center",
  },
});

export default FirstScreen;
