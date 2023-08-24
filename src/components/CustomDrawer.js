import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#EFEFEF' }}
      >
        {/* <ImageBackground source={require('')} /> */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Our Custom Text</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
