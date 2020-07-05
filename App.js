import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from "./Screens/MainStack";

export default function App(){
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
