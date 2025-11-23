import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { store } from './src/store/store';
import { loadSettings } from './src/store/settingsSlice';
import { initDatabase } from './src/database/Database';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { LoadingComponent } from './src/components';
import { View, StyleSheet } from 'react-native';

const AppContent = () => {
    const [dbInitialized, setDbInitialized] = useState(false);
    const dispatch = useDispatch();
    const { darkMode } = useSelector((state) => state.settings);

    useEffect(() => {
        const initializeApp = async () => {
            try {
                await initDatabase();
                setDbInitialized(true);
                dispatch(loadSettings());
            } catch (error) {
                console.error('Error initializing app:', error);
            }
        };

        initializeApp();
    }, [dispatch]);

    if (!dbInitialized) {
        return (
            <View style={styles.loadingContainer}>
                <LoadingComponent color="#007AFF" />
            </View>
        );
    }

    return (
        <>
            <StatusBar style={darkMode ? 'light' : 'dark'} />
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        </>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

export default App;

