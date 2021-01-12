import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
   // justifyContent: "center",
   // alignItems: "center",
    // paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  heading: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    
  },
  subheading: {
    color: "black",
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: "dodgerblue",
    width: 300,
    height: 40,
    marginHorizontal: 20,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    padding: 10,
  },
  splashScreen: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  card: {
    padding: 0,
    width: 160,
    borderRadius: 10,
  },
  cardHeading: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 8,
    fontSize: 18,
  },
  //header
  headerContainer: {
    width: "95%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#5B2087",
  },
  headerHeading: {
    fontSize: 18,
    marginHorizontal: 8,
    color: "#FFFF",
  },
  headerAddress: {
    color: "gray",
    fontSize: 12,
    width: "80%",
    color: "#FFFF",
  },
});

export default styles;
