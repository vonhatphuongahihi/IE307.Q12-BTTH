import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// 22521172 - Vo Nhat Phuong
const Tab = createBottomTabNavigator();

function MainBottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='home' size={30} color={focused ? 'blue' : 'black'}/>
          ),
          headerShown: false,
        }}
      />
      {/* 22521172 - Vo Nhat Phuong */}
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='th-large' size={30} color={focused ? 'blue' : 'black'}/>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='heart' size={30} color={focused ? 'blue' : 'black'}/>
          ),
          headerShown: false,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='user' size={30} color={focused ? 'blue' : 'black'}/>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
} // 22521172 - Vo Nhat Phuong
export default MainBottom;
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    margin: 10,
  },
});
