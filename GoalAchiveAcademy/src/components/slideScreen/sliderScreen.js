import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { btnColor, ViewColor } from "../../constants/color";

const sliderScreen = (props) => {
  const { width, height } = Dimensions.get("screen");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View
            style={{ width: width , height: height *0.5, backgroundColor: "#FFF" }}
          >
            <Text
              style={{
                alignSelf: "center",
                padding: 100,
                fontSize: 24,
                fontWeight: "bold",
                color: ViewColor,
              }}
            >
              Upload Prescription{" "}
            </Text>

            <Image
              source={require("../../app-assets/png/slide01.png")}
              style={{ alignSelf: "center", resizeMode: "cover" }}
            />

            <Text style={[styles.text, {}]}>
              Upload your prescription on to the app and get it approved
            </Text>
          </View>

          <View
            style={{ width: width, height: height, backgroundColor: "#FFF" }}
          >
            <Text
              style={{
                alignSelf: "center",
                padding: 100,
                fontSize: 24,
                fontWeight: "bold",
                color: ViewColor,
              }}
            >
              Select Medical store{" "}
            </Text>

            <Image
              source={require("../../app-assets/png/slide02.png")}
              style={{ alignSelf: "center", resizeMode: "cover" }}
            />

            <Text style={[styles.text, {}]}>
              select medical store you would like to palce an order from
            </Text>
          </View>
          <View
            style={{ width: width, height: height, backgroundColor: "#FFF" }}
          >
            <Text
              style={{
                alignSelf: "center",
                padding: 100,
                fontSize: 24,
                fontWeight: "bold",
                color: ViewColor,
              }}
            >
              Doorstep Delivery{" "}
            </Text>

            <Image
              source={require("../../app-assets/png/slide03.png")}
              style={{ alignSelf: "center", resizeMode: "cover" }}
            />

            <Text style={[styles.text, {}]}>
              Have the medicines delivered at your doorstep or you could opt for
              a self pick-up as well
            </Text>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: btnColor,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 150,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: btnColor,
    marginLeft: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "#9F9F9F",
    position: "absolute",
    bottom: 250,
    marginHorizontal: 80,
  },
  image: {
    alignSelf: "center",
    width: 360,
    height: 740,
  },
  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 100,
    right: 20,
  },
});

export default sliderScreen;
