import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const CustomButton = ({ onPress, icon, color, size = 30, style }) => {
    const { darkMode } = useSelector((state) => state.settings);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: color }, style]}
            activeOpacity={0.7}
        >
            <Ionicons name={icon} size={size} color={darkMode ? '#000000' : 'white'} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default CustomButton;

