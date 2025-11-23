import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import EditNoteScreen from '../screens/EditNoteScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const { darkMode } = useSelector((state) => state.settings);

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
                },
                headerTintColor: darkMode ? '#ffffff' : '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddNote"
                component={AddNoteScreen}
                options={{
                    title: 'AddNote',
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="EditNote"
                component={EditNoteScreen}
                options={{
                    title: 'EditNote',
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;

