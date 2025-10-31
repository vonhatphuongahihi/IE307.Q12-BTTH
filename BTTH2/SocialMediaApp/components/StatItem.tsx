// 22521172 - Võ Nhất Phương
import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface StatItemProps {
    text: string;
}

const StatItem = ({ text }: StatItemProps) => {
    return <Text style={styles.statsText}>{text}</Text>;
};

const styles = StyleSheet.create({
    statsText: {
        flex: 1,
        fontSize: 13,
        color: '#A0A1A0',
        fontWeight: '500',
        textAlign: 'center',
    },
});

export default StatItem;

