import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
// import { AsyncLocalStorage } from 'async_hooks';

const Stack = createStackNavigator();

const MainNavigator = () => {

  // useEffect(()=>{

  //   let data  = AsyncLocalStorage("het")

  //   if(data){

  //   }else{

  //   }

  // })
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
