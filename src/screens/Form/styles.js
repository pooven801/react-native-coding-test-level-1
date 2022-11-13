import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "#7a8b8b",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  inputContainer: {
    backgroundColor: "#525c5d",
    width: "100%",
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  submitContainer: {
    backgroundColor: "#292e2e",
    width: "80%",
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignSelf: "center",
    marginTop: 30,
  },

  inputFont: {
    fontSize: 22,
    color: "white",
  },

  dateInputText: {
    color: "#7a8b8b",
    fontSize: 22,
  },

  submitText: { color: "#7a8b8b", fontSize: 20, alignSelf: "center" },
});
