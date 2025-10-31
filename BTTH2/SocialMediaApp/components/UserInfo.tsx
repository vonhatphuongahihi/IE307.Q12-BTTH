// 22521172 - Võ Nhất Phương
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface UserInfoProps {
    avatar: any;
    username: string;
}

const UserInfo = ({ avatar, username }: UserInfoProps) => {
    return (
        <View style={styles.container}>
            <Image source={avatar} style={styles.avatar} />
            <Text style={styles.username}>{username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    // 22521172 - Võ Nhất Phương
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default UserInfo;

