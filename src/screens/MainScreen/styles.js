import { StyleSheet } from "react-native";

export default StyleSheet.create({

    mainContainer: {
        backgroundColor: "#f5fafa", height: "100%", width: "100%", justifyContent: "center"
    },

    buttonContainer: {position: "absolute", alignSelf: "center"},

    buttonStyles: {
        width: 150, height: 50, backgroundColor: "#8fa2a2", marginBottom: 10,
        borderRadius: 10, alignItems: "center", justifyContent: "center"
    },
    
    textStyles:{
        color: "white", fontSize: 22
    },

});
