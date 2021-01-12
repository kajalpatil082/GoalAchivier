
/*Example of React Native Video*/
import React, { Component } from 'react';
//Import React
import { Platform, Dimensions,StyleSheet,Linking, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
//Import Basic React Native Component
import Video ,{ TextTrackType }from 'react-native-video';
//Import React Native Video to play video
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/MaterialIcons";
export default class VedioPlay extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      screenType: 'content',
    };
  }

  
  render() {
    
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    return (
      <View style={styles.container}>
          <Text style={{fontSize:20,textAlign:"center",fontWeight:'bold',padding:10}}>Details</Text>
          <View style={{marginTop:30}}>
            {/* <TouchableOpacity style={styles.ListStyle} onPress={()=>this.props.navigation.navigate('WebView')}>
                <Text style={styles.item2}>Registration</Text>
                <Icon3 name={'app-registration'} color={'#fff'} size={40}/>
            
            </TouchableOpacity> */}
           
            <View style={[styles.separator]}></View>
            <TouchableOpacity style={styles.ListStyle} onPress={()=>this.props.navigation.navigate('Achivments')}>
                <Text style={styles.item2}>Achivments</Text>
                <Icon2 name={'star-outlined'} color={'#fff'} size={40}/>
                
                
            </TouchableOpacity>

            <View style={[styles.separator]}></View>
            <TouchableOpacity style={styles.ListStyle} onPress={()=>this.props.navigation.navigate('Location')}>
                <Text style={styles.item2}>Location</Text>
                <Icon name={'location'} color={'#fff'} size={40}/>
                
            </TouchableOpacity>
            <View style={[styles.separator]}></View>
            <TouchableOpacity style={styles.ListStyle} onPress={()=>this.props.navigation.navigate('QuizIndex')}>
                <Text style={styles.item2}>Test</Text>
                <Icon3 name={'app-registration'} color={'#fff'} size={40}/>
                
            </TouchableOpacity>
            <View style={[styles.separator]}></View>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ListStyle:{
height:50,
flexDirection:'row',
justifyContent:'space-between',
marginBottom:2,
backgroundColor:'gray'
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    width:Dimensions.get('window').width,
    height:200,
    borderWidth:2,
    right:10,
    //position: 'absolute',
    padding:10,
    marginLeft:20,
    right:20,
    
  },
  imageView1: {
   // alignSelf: 'center',
    width: 50,
    height: 50,
   
    padding:10
    // borderWidth:3,
    // borderColor:'red'

},
item2: {
    
    padding: 10,
    fontSize: 18,
    height: 'auto',
    // multiline: true,
    color: 'black',
    fontWeight: 'bold',

    // marginLeft: 10,
    //textDecorationLine: 'underline',

},
separator: {
    height: 1,
    backgroundColor: 'black'
},
});