import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

export default function ItemCard(props) {
  const { onPress, pokemonName, showButton } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{pokemonName}</Text>
      {showButton && (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Show Detail</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

ItemCard.propTypes = {
  onPress: PropTypes.func,
  pokemonName: PropTypes.string,
  showButton: PropTypes.bool,
};

ItemCard.defaultProps = {
  onPress: () => {},
  pokemonName: "",
  showButton: false,
};
