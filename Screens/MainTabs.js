import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feed } from "./Feed";
import { Home } from "./Home";
import { About } from "./About";

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        indicatorStyle: {backgroundColor: '#f69e7b'},
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#383e56' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ tabBarLabel: 'About' }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ tabBarLabel: 'Feed' }}
      />
    </Tab.Navigator>
  );
}