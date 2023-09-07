import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
// import AppBar from '../components/AppBar/AppBar';
import General from '../components/General/General';

import MyComponent from '../components/PopupMenu/PopupMenu';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={General} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
