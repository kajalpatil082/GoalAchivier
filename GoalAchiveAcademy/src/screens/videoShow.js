import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert ,Text,StyleSheet} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoPlay(props) {
    const videoUrl=props.navigation.state.params;
    console.log('********',videoUrl);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={videoUrl.url}
        onChangeState={onStateChange}
      />
      <Text style={styles.item2}
                            // onPress={() => Linking.openURL(item.url)}
                            >
                             {videoUrl.desc}
                         </Text>
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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