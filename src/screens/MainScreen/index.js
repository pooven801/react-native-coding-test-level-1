import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          testID="ContactUsBtn"
          style={styles.buttonStyles}
          onPress={() => {
            navigation.push("Form");
          }}
        >
          <Text style={styles.textStyles}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="ViewCatalogBtn"
          style={[styles.buttonStyles]}
          onPress={() => {
            navigation.push("ViewCatalog");
          }}
        >
          <Text style={styles.textStyles}>View Catalog</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;
