// 22521172 - Vo Nhat Phuong
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableOpacity, Alert } from 'react-native';

export default function Feedback({ darkMode, notif, funct }) {
    const [value, setValue] = useState("");

    const styles = StyleSheet.create({
        container: {
            height: 120,
            borderColor: '#c4bebe',
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: darkMode === false ? "#fff" : "#212121",
            marginBottom: 10,
        },
        textInput: {
            padding: 15,
            color: darkMode === false ? "#000000" : "#fff",
            flex: 1,
        },
        feedbackText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: darkMode === false ? "#000000" : "#fff",
            marginBottom: 12,
            marginTop: 10,
        },
        button: {
            backgroundColor: '#007AFF',
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 8,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
        }
    });

    return (
        <View>
            <Text style={styles.feedbackText}>
                Feedback
            </Text>
            <View style={styles.container}>
                <TextInput
                    editable
                    placeholder='Your feedback here...'
                    placeholderTextColor={darkMode === false ? "#000000" : "#ffffff"}
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textInput}
                    onChangeText={text => setValue(text)}
                    value={value}
                    onBlur={Keyboard.dismiss}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (value !== "") {
                        if (notif === true) Alert.alert('Thank you for your feedback!', '', [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
                        funct(value);
                        setValue("");
                    }
                }}
            >
                <Text style={styles.buttonText}>Send Feedback</Text>
            </TouchableOpacity>
        </View>
    );
}
