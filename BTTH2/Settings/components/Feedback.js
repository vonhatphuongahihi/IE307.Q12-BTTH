// 22521172 - Vo Nhat Phuong
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableOpacity, Modal } from 'react-native';

export default function Feedback({ darkMode, notif, funct }) {
    const [value, setValue] = useState("");
    const [showModal, setShowModal] = useState(false);

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
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
            backgroundColor: darkMode === false ? "#fff" : "#212121",
            padding: 30,
            borderRadius: 15,
            alignItems: 'center',
            width: '80%',
        },
        modalText: {
            fontSize: 16,
            color: darkMode === false ? "#000000" : "#fff",
            marginBottom: 20,
            textAlign: 'center',
        },
        modalButton: {
            backgroundColor: '#007AFF',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 8,
        },
        modalButtonText: {
            color: '#fff',
            fontSize: 14,
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
                        if (notif === true) {
                            setShowModal(true);
                        }
                        funct(value);
                        setValue("");
                    }
                }}
            >
                <Text style={styles.buttonText}>Send Feedback</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Thank you for your feedback!</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

