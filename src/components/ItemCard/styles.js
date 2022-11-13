import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    width: "90%",
    height: Dimensions.get("window").width / 2,
    backgroundColor: "#525c5d",
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 10,
  },

  titleStyle: {
    fontSize: 30,
    alignSelf: "center",
    color: "white",
    paddingTop: 20,
  },

  buttonStyle: {
    width: "90%",
    height: 45,
    backgroundColor: "#8fa2a2",
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTextStyle: { fontSize: 24, color: "white" },
});
