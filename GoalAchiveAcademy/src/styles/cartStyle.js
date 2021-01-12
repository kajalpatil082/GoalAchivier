import { StyleSheet } from "react-native";
import { ViewColor, btnColor } from "../constants/color";
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    // paddingHorizontal: 10,
  },
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    paddingHorizontal: 2,
    borderColor: "gray",
  },
  itemHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 12,
    color: "gray",
  },
  textContainer: {
    alignItems: "flex-start",
  },
  quantity: {
    width: "30%",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "gray",
    height: 25,
    marginHorizontal: 8,
  },
  addressContainer: {
    flexDirection: "row",
  },
  header: {
    backgroundColor: "dodgerblue",
    width: "100%",
    padding: 10,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: ViewColor,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "flex-start",
  },
  emptyCartButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "dodgerblue",
    padding: 8,
  },
});

export default style;
