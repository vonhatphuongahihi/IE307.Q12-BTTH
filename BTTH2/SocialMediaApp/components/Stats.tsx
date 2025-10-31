// 22521172 - Võ Nhất Phương
import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatItem from './StatItem';

interface StatsProps {
    likes: number;
    comments: number;
    shares: number;
}

const Stats = ({ likes, comments, shares }: StatsProps) => {
    return (
        <View style={styles.container}>
            <StatItem text={`${likes} Likes`} />
            <StatItem text={`${comments} Comments`} />
            <StatItem text={`${shares} Shares`} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8,
        marginBottom: 8,
    },
});

export default Stats;

