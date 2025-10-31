// 22521172 - Võ Nhất Phương
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3598DB',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    // 22521172 - Võ Nhất Phương
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
    },
});

export default Header;

