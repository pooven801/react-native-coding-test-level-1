import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';

import styles from './styles';


const Form = ({ navigation }) => {

    const [formInput, setFormInput] = useState({ userName: "", email: "", birthday: "" })
    const [emailValid, setEmailValid] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)

    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setEmailValid(false)
            setFormInput({ ...formInput, email: text })
            return false;
        }
        else {
            setFormInput({ ...formInput, email: text })
            setEmailValid(true)
        }
    }

    const setDate = (event, date) => {
        setShowDatePicker(false)
        if (event?.type == "set") {
            setFormInput({ ...formInput, birthday: date })
        }
    };

    const submitForm = () => {

        if (formInput.userName == "") {
            Alert.alert("Error", "Empty user name")
        }
        else if (formInput.email == "") {
            Alert.alert("Error", "Empty email")
        }
        else if (emailValid == false) {
            Alert.alert("Error", "Invalid email")
        }
        else if (formInput.birthday == "") {
            Alert.alert("Error", "Choose birthday")
        }
        else {
            Alert.alert("",
                "User Name: " + formInput.userName + "\n" +
                "Email: " + formInput.email + "\n" +
                "Birthday: " + formInput.birthday.getDate() + "/" + (formInput.birthday.getMonth() + 1) + "/" + formInput.birthday.getFullYear()
            )
        }
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputFont}
                    onChangeText={text =>
                        setFormInput({ ...formInput, userName: text.replace(/[^a-z]/gi, '') })
                    }
                    value={formInput.userName}
                    placeholder="User Name"
                    placeholderTextColor="#7a8b8b"
                    maxLength={50}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputFont}
                    onChangeText={text =>
                        validateEmail(text)
                    }
                    value={formInput.email}
                    placeholder="Email"
                    placeholderTextColor="#7a8b8b"
                />
            </View>

            <TouchableOpacity style={styles.inputContainer} onPress={() => { setShowDatePicker(!showDatePicker) }}>
                <Text style={[styles.dateInputText, formInput.birthday && { color: "white" }]}>
                    {formInput.birthday == "" ? "Choose Birthday" :
                        (formInput.birthday.getDate() + "/" + (formInput.birthday.getMonth() + 1) + "/" + formInput.birthday.getFullYear())}
                </Text>
                {showDatePicker && <DateTimePickerAndroid value={new Date()} maximumDate={new Date()} onChange={setDate} />}
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { submitForm() }}
                style={styles.submitContainer}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Form;