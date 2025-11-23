import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// 22521172 - Vo Nhat Phuong

function Categories1Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Categories1</Text>
        </View>
    );
}

export default Categories1Screen;

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

