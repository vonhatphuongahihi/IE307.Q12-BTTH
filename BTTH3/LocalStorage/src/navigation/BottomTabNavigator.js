import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import HomeStack from './HomeStack';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const { darkMode } = useSelector((state) => state.settings);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeTab') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: darkMode ? '#ffffff' : '#999',
                tabBarStyle: {
                    backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                    borderTopColor: darkMode ? '#333' : '#e0e0e0',
                },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    title: 'Home',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
                    },
                    headerTintColor: darkMode ? '#ffffff' : '#000000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

