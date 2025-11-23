import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@react-native-community/slider';
import { updateDarkMode, updateFontSize } from '../store/settingsSlice';

const SettingsScreen = () => {
    const { darkMode, fontSize } = useSelector((state) => state.settings);
    const dispatch = useDispatch();

    const handleDarkModeToggle = (value) => {
        dispatch(updateDarkMode(value));
    };

    const handleFontSizeChange = (value) => {
        dispatch(updateFontSize(Math.round(value)));
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <View style={[styles.container, theme.container]}>
            <View style={styles.settingItem}>
                <View style={styles.settingRow}>
                    <Text style={[styles.settingLabel, theme.settingLabel, { fontSize }]}>
                        Dark Mode
                    </Text>
                    <Switch
                        value={darkMode}
                        onValueChange={handleDarkModeToggle}
                        trackColor={{ false: '#767577', true: darkMode ? '#4ECDC4' : '#81b0ff' }}
                        thumbColor={darkMode ? '#4ECDC4' : '#f4f3f4'}
                    />
                </View>
            </View>

            <View style={styles.settingItem}>
                <View style={styles.settingRow}>
                    <Text style={[styles.settingLabel, theme.settingLabel, { fontSize }]}>
                        Font Size
                    </Text>
                    <Text style={[styles.fontSizeValue, theme.fontSizeValue, { fontSize }]}>
                        {fontSize}
                    </Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={12}
                    maximumValue={36}
                    step={2}
                    value={fontSize}
                    onValueChange={handleFontSizeChange}
                    minimumTrackTintColor={darkMode ? '#4ECDC4' : '#007AFF'}
                    maximumTrackTintColor={darkMode ? '#333' : '#d3d3d3'}
                    thumbTintColor={darkMode ? '#4ECDC4' : '#007AFF'}
                />
            </View>
        </View>
    );
};

const lightTheme = {
    container: { backgroundColor: '#ffffff' },
    settingLabel: { color: '#333' },
    fontSizeValue: { color: '#333' },
};

const darkTheme = {
    container: { backgroundColor: '#000000' },
    settingLabel: { color: '#ffffff' },
    fontSizeValue: { color: '#ffffff' },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    settingItem: {
        marginBottom: 30,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    settingLabel: {
        fontWeight: '600',
    },
    fontSizeValue: {
        fontWeight: '600',
    },
    slider: {
        width: '100%',
        height: 40,
    },
});

export default SettingsScreen;

