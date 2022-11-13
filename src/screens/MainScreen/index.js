
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const MainScreen = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyles} onPress={() => { navigation.navigate('Form'); }}>
                    <Text style={styles.textStyles}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyles]} onPress={() => { navigation.navigate('ViewCatalog'); }}>
                    <Text style={styles.textStyles}>View Catalog</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MainScreen;