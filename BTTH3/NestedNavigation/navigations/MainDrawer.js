import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import NotificationsStack from './NotificationsStack';
import HelpScreen from './screens/HelpScreen';
// 22521172 - Vo Nhat Phuong

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation, state }) {
    const getActiveRouteName = () => {
        const route = state.routes[state.index];
        if (route.state) {
            return getActiveRouteNameFromState(route.state);
        }
        return route.name;
    };

    const getActiveRouteNameFromState = (navState) => {
        if (!navState) {
            return null;
        }
        const route = navState.routes[navState.index];
        if (route.state) {
            return getActiveRouteNameFromState(route.state);
        }
        return route.name;
    };

    const activeRoute = getActiveRouteName();

    return (
        <View style={styles.drawerContainer}>
            <View style={styles.drawerHeader}>
                <Text style={styles.drawerHeaderText}>Menu</Text>
            </View>
            <TouchableOpacity
                // 22521172 - Vo Nhat Phuong
                style={[
                    styles.drawerItem,
                    activeRoute === 'Home' && styles.drawerItemActive
                ]}
                onPress={() => navigation.navigate('Home')}
            >
                <Icon name='home' size={24} color={activeRoute === 'Home' ? '#007AFF' : '#666'} style={styles.drawerIcon} />
                <Text style={[
                    styles.drawerItemText,
                    activeRoute === 'Home' && styles.drawerItemTextActive
                ]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.drawerItem,
                    activeRoute === 'Notifications' && styles.drawerItemActive
                ]}
                onPress={() => navigation.navigate('Notifications')}
            >
                <Icon name='bell' size={24} color={activeRoute === 'Notifications' ? '#007AFF' : '#666'} style={styles.drawerIcon} />
                <Text style={[
                    styles.drawerItemText,
                    activeRoute === 'Notifications' && styles.drawerItemTextActive
                ]}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.drawerItem,
                    activeRoute === 'Helps' && styles.drawerItemActive
                ]}
                onPress={() => navigation.navigate('Helps')}
            >
                <Icon name='question-circle' size={24} color={activeRoute === 'Helps' ? '#007AFF' : '#666'} style={styles.drawerIcon} />
                <Text style={[
                    styles.drawerItemText,
                    activeRoute === 'Helps' && styles.drawerItemTextActive
                ]}>Helps</Text>
                {/* 22521172 - Vo Nhat Phuong */}
            </TouchableOpacity>
        </View>
    );
}

function MainDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeStack}
            />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsStack}
            />
            <Drawer.Screen
                name="Helps"
                component={HelpScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: 'Helps',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                            style={{ marginLeft: 15, marginRight: 15 }}
                        >
                            <Icon name='bars' size={24} color='#007AFF' />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Drawer.Navigator>
    );
}

export default MainDrawer;

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
    },
    drawerHeader: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    drawerHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    drawerItemActive: {
        backgroundColor: '#e3f2fd',
    },
    drawerIcon: {
        marginRight: 25,
    },
    drawerItemText: {
        fontSize: 16,
        color: '#666',
    },
    drawerItemTextActive: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
});

