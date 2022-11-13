import React from "react";
import {
    View,
    TouchableOpacity,
    Text
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

export default function Header(props) {
    const {
        onPress
    } = props;


    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonContainer}>
            <Text style={styles.textStyles}>Back</Text>
        </TouchableOpacity>
    )
}

Header.propTypes = {
    onPress: PropTypes.func,

};

Header.defaultProps = {
    onPress: () => { },
};
