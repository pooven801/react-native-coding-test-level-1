
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const MainScreen = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigation.navigate('Form'); }}>
                <Text style={styles.textStyles}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MainScreen;