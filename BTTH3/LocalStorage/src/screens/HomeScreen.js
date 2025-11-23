import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { getNotes, deleteNote } from '../database/Database';
import { LoadingComponent } from '../components';

const HomeScreen = ({ navigation }) => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { darkMode, fontSize } = useSelector((state) => state.settings);

    const loadNotes = useCallback(async () => {
        try {
            setLoading(true);
            const notesData = await getNotes();
            setNotes(notesData);
        } catch (error) {
            console.error('Error loading notes:', error);
            Alert.alert('Error', 'Failed to load notes');
        } finally {
            setLoading(false);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadNotes();
        }, [loadNotes])
    );

    const handleDeleteNote = (id) => {
        Alert.alert(
            'Delete Note',
            'Are you sure you want to delete this note?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deleteNote(id);
                            loadNotes();
                        } catch (error) {
                            console.error('Error deleting note:', error);
                            Alert.alert('Error', 'Failed to delete note');
                        }
                    },
                },
            ]
        );
    };

    const handleNotePress = (note) => {
        navigation.navigate('EditNote', { note });
    };

    const renderNoteItem = ({ item }) => {
        const theme = darkMode ? darkTheme : lightTheme;
        return (
            <TouchableOpacity
                style={[styles.noteItem, theme.noteItem]}
                onPress={() => handleNotePress(item)}
                activeOpacity={0.7}
            >
                <View style={styles.noteContent}>
                    <Text style={[styles.noteTitle, theme.noteTitle, { fontSize }]}>
                        {item.title}
                    </Text>
                    <Text style={[styles.noteText, theme.noteText, { fontSize }]}>
                        {item.content}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleDeleteNote(item.id)}
                    style={styles.deleteButton}
                    activeOpacity={0.7}
                >
                    <Ionicons
                        name="trash-outline"
                        size={24}
                        color={darkMode ? '#ff6b6b' : '#ff4444'}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    const theme = darkMode ? darkTheme : lightTheme;

    if (loading) {
        return (
            <View style={[styles.container, theme.container]}>
                <LoadingComponent color={darkMode ? '#4ECDC4' : '#007AFF'} />
            </View>
        );
    }

    return (
        <View style={[styles.container, theme.container]}>
            <View style={[styles.header, theme.header]}>
                <Text style={[styles.headerTitle, theme.headerTitle]}>Note App</Text>
            </View>
            <View style={styles.contentHeader}>
                <Text style={[styles.sectionTitle, theme.sectionTitle, { fontSize }]}>
                    All notes
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddNote')}
                    style={styles.addButton}
                    activeOpacity={0.7}
                >
                    <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
            </View>
            {notes.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Ionicons
                        name="document-text-outline"
                        size={64}
                        color={darkMode ? '#666' : '#999'}
                    />
                    <Text style={[styles.emptyText, theme.emptyText, { fontSize }]}>
                        No notes yet. Tap + to add one!
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={notes}
                    renderItem={renderNoteItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
};

const lightTheme = {
    container: { backgroundColor: '#ffffff' },
    header: { backgroundColor: '#f5f5f5' },
    headerTitle: { color: '#FF6B35' },
    sectionTitle: { color: '#333' },
    noteItem: { backgroundColor: '#f9f9f9', borderColor: '#e0e0e0' },
    noteTitle: { color: '#333' },
    noteText: { color: '#666' },
    emptyText: { color: '#999' },
};

const darkTheme = {
    container: { backgroundColor: '#000000' },
    header: { backgroundColor: '#1a1a1a' },
    headerTitle: { color: '#4ECDC4' },
    sectionTitle: { color: '#ffffff' },
    noteItem: { backgroundColor: '#1a1a1a', borderColor: '#333' },
    noteTitle: { color: '#ffffff' },
    noteText: { color: '#cccccc' },
    emptyText: { color: '#666' },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 50,
        paddingBottom: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontWeight: '600',
    },
    addButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#FF6B35',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    noteItem: {
        flexDirection: 'row',
        padding: 15,
        marginBottom: 12,
        borderRadius: 12,
        borderWidth: 1,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    noteContent: {
        flex: 1,
        marginRight: 10,
    },
    noteTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    noteText: {
        lineHeight: 24,
    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyText: {
        marginTop: 20,
        textAlign: 'center',
    },
});

export default HomeScreen;

