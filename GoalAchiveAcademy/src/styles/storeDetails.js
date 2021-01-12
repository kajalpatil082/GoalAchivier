import { StyleSheet } from "react-native";
import { btnColor } from "../constants/color";
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  text: {
    color: "gray",
    width: "70%",
  },
  headingContainer: {
    backgroundColor: "#fff",
    padding: 10,
  },
  listContainer: {
    backgroundColor: "#fff",
    marginTop: 8,
    padding: 10,
  },
  listItem: {
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: 10,
  },
  buttonContainer: {
    width: 80,
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: btnColor,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemTextHead: {
    fontSize: 16,
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    padding: 8,
    width: "60%",
  },
  searchButton: {
    height: 50,
    width: 50,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    width: "50%",
    // height: 50,
    position: "absolute",
    bottom: 5,
    left: 0,
    // borderWidth: 1,
    borderColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: btnColor,
    padding: 10,
    // borderRadius: 10,
  },
  banner: {
    width: "100%",
    height: 200,
  },
  viewCartFloat: {
    height: 45,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "green",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
});

export default style;
