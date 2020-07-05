import React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from "./Home";
import { About } from "./About";

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: 'About' }}
      />
    </Drawer.Navigator>
  );
}