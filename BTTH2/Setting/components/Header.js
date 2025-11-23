// 22521172 - Vo Nhat Phuong
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header({ darkMode, source }) {
    const styles = StyleSheet.create({
        header: {
            height: 180,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
        },
        logo: {
            width: 100,
            height: 100,
            borderRadius: 50,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            color: darkMode === false ? "#000000" : "#fff",
            marginTop: 12,
            letterSpacing: 0.5,
        }
    });
    // 22521172 - Vo Nhat Phuong
    return (
        <View style={styles.header}>
            <Image source={source} style={styles.logo} resizeMode="cover" />
            <Text style={styles.title}>
                React Native App
            </Text>
        </View>
    );
}

