
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
// import Login from '../screens/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../hooks';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const { Colors, Fonts } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Function to check if the user is logged in
  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {loggedIn ? (
        // If logged in, navigate to BottomNavigation
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      ) : (
        // If not logged in, navigate to LoginScreen
        <Stack.Screen name="Login" component={Login} />
      )} */}
       <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

