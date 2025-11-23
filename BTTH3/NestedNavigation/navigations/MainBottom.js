import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CategoriesTopTabs from "./CategoriesTopTabs";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// 22521172 - Vo Nhat Phuong

const Tab = createBottomTabNavigator();

function MainBottom({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name='home' size={30} color={color} />
          ),
          tabBarLabel: 'Home',
          headerShown: true,
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.getParent().openDrawer()}
              style={{ marginLeft: 15, marginRight: 15 }}
            >
              <Icon name='bars' size={24} color='#007AFF' />
            </TouchableOpacity>
          ),
        }}
      />
      {/* 22521172 - Vo Nhat Phuong */}
      <Tab.Screen
        name="Category"
        component={CategoriesTopTabs}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name='th-large' size={30} color={color} />
          ),
          tabBarLabel: 'Categories',
          headerShown: true,
          title: 'Categories',
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name='heart' size={30} color={color} />
          ),
          tabBarLabel: 'Favorites',
          headerShown: true,
          title: 'Favourites',
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name='user' size={30} color={color} />
          ),
          tabBarLabel: 'Profile',
          headerShown: true,
          title: 'Profile',
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
