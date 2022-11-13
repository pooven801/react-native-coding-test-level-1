import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

export default function ItemSubCard(props) {
  const { title, subTitle } = props;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      {subTitle != [] &&
        subTitle.map((item, index) => {
          return (
            <Text
              key={index}
              style={[
                styles.subTitleStyle,
                index + 1 == subTitle.length && { paddingBottom: 10 },
              ]}
            >
              {"\u2B24 " + item}
            </Text>
          );
        })}
    </View>
  );
}

ItemSubCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.array,
};

ItemSubCard.defaultProps = {
  title: "",
  subTitle: [],
};
