import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { addNote } from '../database/Database';
import { CustomButton } from '../components';

const AddNoteScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { darkMode, fontSize } = useSelector((state) => state.settings);

    const handleSave = async () => {
        if (title.trim() === '') {
            Alert.alert('Warning', 'Please enter a title!');
            return;
        }

        try {
            await addNote(title.trim(), content.trim());
            navigation.goBack();
        } catch (error) {
            console.error('Error adding note:', error);
            Alert.alert('Error', 'Failed to save note');
        }
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <KeyboardAvoidingView
            style={[styles.container, theme.container]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, theme.label, { fontSize }]}>Enter your title</Text>
                    <TextInput
                        style={[
                            styles.input,
                            theme.input,
                            { fontSize, borderColor: darkMode ? '#333' : '#e0e0e0' },
                        ]}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Enter your title"
                        placeholderTextColor={darkMode ? '#666' : '#999'}
                        autoFocus
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={[styles.label, theme.label, { fontSize }]}>Enter your note</Text>
                    <TextInput
                        style={[
                            styles.textArea,
                            theme.input,
                            { fontSize, borderColor: darkMode ? '#333' : '#e0e0e0' },
                        ]}
                        value={content}
                        onChangeText={setContent}
                        placeholder="Enter your note"
                        placeholderTextColor={darkMode ? '#666' : '#999'}
                        multiline
                        textAlignVertical="top"
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton
                        onPress={handleCancel}
                        icon="close"
                        color="#ff4444"
                        size={24}
                        style={styles.actionButton}
                    />
                    <CustomButton
                        onPress={handleSave}
                        icon="checkmark"
                        color="#4CAF50"
                        size={24}
                        style={styles.actionButton}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const lightTheme = {
    container: { backgroundColor: '#ffffff' },
    label: { color: '#333' },
    input: { backgroundColor: '#ffffff', color: '#333' },
};

const darkTheme = {
    container: { backgroundColor: '#000000' },
    label: { color: '#ffffff' },
    input: { backgroundColor: '#1a1a1a', color: '#ffffff' },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        minHeight: 50,
    },
    textArea: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        minHeight: 150,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    actionButton: {
        marginHorizontal: 10,
    },
});

export default AddNoteScreen;

