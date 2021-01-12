
/*Example of React Native Video*/
import React, { Component } from 'react';
//Import React
import { Platform, Dimensions,StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native';
//Import Basic React Native Component
import Video ,{ TextTrackType }from 'react-native-video';
//Import React Native Video to play video
const VideoData=[
    {   imageUrl:require("../images/rahul.jpeg"),
        url:"RgUouMjwHx4",
        desc:"Mountain Passes in India  भारत के प्रमुख दर्रे की ट्रिक (MAP) के साथ "
    },
    {
        imageUrl:require("../images/utube2.jpeg"),
        url:"B2HJGutlOJE",
        desc:"MP-Police/jail prahari/samvidha Questions"
    },
    
]
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

  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
     
    });
  };

  onReplay = () => {
    //Handler for Replay
    // this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    // if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
    //   this.setState({ currentTime: data.currentTime });
    // }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text> toolbar </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });
  renderSeparator = () => {  
    return (  
        <View  
            style={{  
                height: 1,  
                width: "100%",  
                backgroundColor: "#000",  
            }}  
        />  
    );  
};  
//handling onPress action  
getListViewItem = (item) => {  
    Alert.alert(item.key);  
}  

  render() {
    
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    return (
      <View style={styles.container}>
         <View style={{ width: '60%' ,marginRight:10}}>
                         <Text style={styles.item2}
                            // onPress={() => Linking.openURL(item.url)}
                            >
                            Lectures List
                         </Text>
                     </View>
            <FlatList  
                    data={VideoData}  
                    renderItem={({item}) =>  
                    <View style={{ flex: 1, flexDirection: 'row' ,width:'100%'}}>
                    <View style={{ width: '40%', paddingBottom:10 }}>
                     {
                      <TouchableOpacity   onPress={() => {this.props.navigation.navigate('VideoDetailScreen',item)}}
                      >
                           <Image style={styles.imageView1} source = {item.imageUrl} />

                          {/* <Image source = {require(item.imageUrl)} style={styles1.imageView1} /> */}
                        </TouchableOpacity> 
                     
                     }
                       
                     </View>
                     <View style={{ width: '60%' ,marginRight:10}}>
                         <Text style={styles.item2}
                            // onPress={() => Linking.openURL(item.url)}
                            >
                             {item.desc}
                         </Text>
                     </View>
                     

                     </View> 
                        // <Text style={styles.item}  
                        //       onPress={this.getListViewItem.bind(this, item)}>{item.desc}</Text>
                            }  
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
        {/* <Video
       //disableFocus={true}
          //onEnd={this.onEnd}
          selectedAudioTrack={{
  type: "title",
  value: "Dubbing"
}}
          fullscreen={true}
          hideShutterView={true}
          repeat={true}
          posterResizeMode='center'
          pictureInPicture={true}
          onLoad={this.onLoad}
          //paused={true}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          //paused={this.state.paused}
          controls={true}
           onBuffer={this.onBuffer} 
          ref={videoPlayer => (this.videoPlayer = videoPlayer)}
          //resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={{ uri: 'http://techslides.com/demos/sample-videos/small.mp4' }}
          style={styles.mediaPlayer}
          volume={10}
          maxBitRate={2000000} 
          resizeMode='stretch'
          title='kajal'
          volume={10}
          selectedTextTrack={{
  type: "title",
  value: "English Subtitles"
}}

        /> */}

        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignSelf: 'center',
    width: '90%',
    height: 100,
    margin: 2,
    padding:10
    // borderWidth:3,
    // borderColor:'red'

},
item2: {
    marginLeft: 2,
    lineHeight: 20,
    //margin: 5,
    padding: 5,
    fontSize: 18,
    height: 'auto',
    // multiline: true,
    color: 'black',
    fontWeight: 'bold',

    // marginLeft: 10,
    //textDecorationLine: 'underline',

},
});