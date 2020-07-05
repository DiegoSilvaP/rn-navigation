import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from "./Screens/MainDrawer"

export default function App(){
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
