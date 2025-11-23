import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationsScreen from './screens/NotificationsScreen';
import NotificationDetailsScreen from './screens/NotificationDetailsScreen';
// 22521172 - Vo Nhat Phuong

const Stack = createStackNavigator();

function NotificationsStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={({ navigation }) => ({
                    title: 'NotificationsScreen',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.getParent().openDrawer()}
                            style={{ marginLeft: 15, marginRight: 15 }}
                        >
                            <Icon name='bars' size={24} color='#007AFF' />
                        </TouchableOpacity>
                    ),
                })}
            />
            {/* 22521172 - Vo Nhat Phuong */}
            <Stack.Screen
                name="NotificationDetails"
                component={NotificationDetailsScreen}
                options={({ navigation }) => ({
                    title: 'NotificationDetailsScreen',
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 15, marginRight: 15 }}
                        >
                            <Icon name='arrow-left' size={24} color='#007AFF' />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

export default NotificationsStack;

