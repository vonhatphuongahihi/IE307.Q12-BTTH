// 22521172 - Vo Nhat Phuong
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function MySwitch({ darkMode, title, funct, value }) {
    const styles = StyleSheet.create({
        switch: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 6,
            paddingHorizontal: 5,
        },
        switchName: {
            fontSize: 16,
            fontWeight: '500',
            color: darkMode === false ? "#000000" : "#fff",
        }
    });

    return (
        <View style={styles.switch}>
            <Text style={styles.switchName}>
                {title}
            </Text>
            <Switch
                trackColor={{ false: "#C8C8C8", true: "#27DC0D" }}
                thumbColor={"#fff"}
                onValueChange={funct}
                value={value}
            />
        </View>
    );
}

