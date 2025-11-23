import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Categories1Screen from './screens/Categories1Screen';
import Categories2Screen from './screens/Categories2Screen';
import Categories3Screen from './screens/Categories3Screen';
// 22521172 - Vo Nhat Phuong
const Tab = createMaterialTopTabNavigator();
function CategoriesTopTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#666',
                tabBarIndicatorStyle: {
                    backgroundColor: '#007AFF',
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    fontSize: 12,
                },
            }}
        >
            <Tab.Screen
                name="Categories1"
                component={Categories1Screen}
                options={{ title: 'CATEGORIES1' }}
            />
            <Tab.Screen
                name="Categories2"
                component={Categories2Screen}
                options={{ title: 'CATEGORIES2' }}
            />
            <Tab.Screen
                name="Categories3"
                component={Categories3Screen}
                options={{ title: 'CATEGORIES3' }}
            />
        </Tab.Navigator>
    );
}
export default CategoriesTopTabs;

