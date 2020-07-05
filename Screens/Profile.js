import React from 'react';
import { View, Button, Text, Animated } from 'react-native';

export function Profile({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }