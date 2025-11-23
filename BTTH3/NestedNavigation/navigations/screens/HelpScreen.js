import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// 22521172 - Vo Nhat Phuong

function HelpScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Helps Screen</Text>
        </View>
    );
}

export default HelpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#666',
    },
});

