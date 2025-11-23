import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// 22521172 - Vo Nhat Phuong

function NotificationDetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notification Details Screen</Text>
        </View>
    );
}

export default NotificationDetailsScreen;

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

