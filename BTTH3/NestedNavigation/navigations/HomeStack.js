import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeDetailsScreen from './screens/HomeDetailsScreen';
import MainBottom from './MainBottom';
// 22521172 - Vo Nhat Phuong

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainBottom"
                component={MainBottom}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeDetails"
                component={HomeDetailsScreen}
                options={({ navigation }) => ({
                    title: 'HomeDetails',
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

export default HomeStack;

