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

class SecondScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor:btnColor}}> 
            <Text style={{ fontSize: 30, fontWeight: "bold",color: "#5B2087",textAlign:"center",marginTop:200}} >Upload Prescription</Text>
                
            <View style={firstStyle.container}>
                <Image
                    source={require("../../images/logo.png")}
                    style={{ width: 260, height: 217, backgroundColor: '#fff', resizeMode:'cover' }}
                />
                <Text style={{ fontSize: 22 ,color:'#9F9F9F'}}> Upload your Prescription on to the app and get it approved </Text>
            </View>
            </View>
        )
    }
}
const firstStyle = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        height:"100%",
        padding:50,
        backgroundColor: 'red',
        alignItems:"center",
        alignContent:"center",
    }
})
export default  SecondScreen;