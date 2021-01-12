import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Platform, Text, View, Dimensions,Linking } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
var { width, height } = Dimensions.get("window");


const ASPECT_RATIO = width / height;
const LATITUDE = 21.3156869;
const LONGITUDE = 76.2149546;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const markerList = [
  {
    lat: 21.3156869,
    long: 76.2149546,
    title: "Goal Achiver Acedamy (Head Office)",
   
  },
  {
    lat:21.302922,
    long: 76.2216569,
    title: "Goal Achiver Acedamy",
   
  },
  
];

export default class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: [
        {
          title:"Goal Achiver Acedamy (Head Office)",
          coordinates: {
            latitude: 21.3156869,
            longitude: 76.2149546,
          }
        },
        {
          title: "hello",
          coordinates: {
            latitude: 3.149771,
            longitude: 101.655449
          }
        }
      ]
    };
  }
 
  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          mapType={Platform.OS == "android" ? "none" : "standard"}
          //onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChange.bind(this)}
          provider="google"
          showsScale={true}
          paddingAdjustmentBehavior="automatic"
          //liteMode={false}
          mapType="standard"
          style={styles.mapStyle}
        >
          {markerList.map(
            marker => (
              console.log("---------", marker),
              (
                <Marker
                  // image={require('../assets/pin.png')}
                  //coordinate={marker.coordinates}
                  coordinate={{ latitude: marker.lat, longitude: marker.long }}
                  title={marker.title}
                  description={marker.description}
                />
              )
            )
          )}
          
        </MapView>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray" ,padding:5}}>
      Address1-  Basant mohan complex near SBI agriculture Bank sindhi basti Square lalbagh Station Road, Madhya Pradesh 450331
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color:  "gray",padding:5 }}>
      Address2-  2 nd Floor,Shankar shree complex infront of ankita multiplex,burhanpur Madhya Pradesh 450331
        </Text>
        <View style={{flexDirection:'row'}}>
        <Entypo name={'old-phone'} color={'blue'} size={25} style={{paddingRight:5,paddingLeft:5}}/>
        <Text style={{ fontSize: 15, fontWeight: "bold", color:  "gray" }} onPress={()=>Linking.openURL(`tel:${'8319902340'}`)}>
      Contact Number1- 8319902340(Rahul Bhamre)
        </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Entypo name={'old-phone'} color={'blue'} size={25} style={{paddingRight:5,paddingLeft:5}}/>
      
        <Text style={{ fontSize: 15, fontWeight: "bold", color:  "gray" }} onPress={()=>Linking.openURL(`tel:${'7898079499'}`)}>
      Contact Number2- 8319885571( Dipak Yadav)
        </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Entypo name={'old-phone'} color={'blue'} size={25} style={{paddingRight:5,paddingLeft:5}}/>
      
        <Text style={{ fontSize: 15, fontWeight: "bold", color:  "gray" }} onPress={()=>Linking.openURL(`tel:${'7898079499'}`)}>
      Contact Number2- 7898079499(Ajay Tayde)
        </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Entypo name={'old-phone'} color={'blue'} size={25} style={{paddingRight:5,paddingLeft:5}}/>
      
        <Text style={{ fontSize: 15, fontWeight: "bold", color:  "gray" }} onPress={()=>Linking.openURL(`tel:${'7898079499'}`)}>
      Contact Number2- 9977679355(Ritesh Salve)
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height*0.5
  }
});