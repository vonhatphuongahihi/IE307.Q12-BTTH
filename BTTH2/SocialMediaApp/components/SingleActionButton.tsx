// 22521172 - Võ Nhất Phương
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface SingleActionButtonProps {
    icon: string;
    label: string;
    onPress: () => void;
    isActive?: boolean;
}

const SingleActionButton = ({ icon, label, onPress, isActive = false }: SingleActionButtonProps) => {
    return (
        <Pressable style={styles.actionButton} onPress={onPress}>
            <FontAwesome
                name={icon as any}
                size={18}
                style={[styles.icon, isActive ? styles.iconActive : styles.iconDefault]}
            />
            <Text style={[styles.actionButtonText, isActive && styles.activeText]}>
                {label}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 4,
    },
    icon: {
        marginRight: 6,
    },
    iconActive: {
        color: '#1976d2',
    },
    iconDefault: {
        color: '#666',
    },
    actionButtonText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#666',
    },
    activeText: {
        color: '#1976d2',
    },
});

export default SingleActionButton;

