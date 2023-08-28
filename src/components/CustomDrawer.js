import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => (
  <View style={{ flex: 1 }}>
    <DrawerContentScrollView
      {...props}
      // contentContainerStyle={{ backgroundColor: '#7454a5' }}
    >
      <ImageBackground
        source={require('../theme/assets/images/backGround.jpg')}
        style={{
          padding: 20,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
      >
        <Image
          source={require('../theme/assets/images/logoImage.png')}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ color: '#EFEFEF' }}>Ayush</Text>
        <Text style={{ color: '#EFEFEF' }}>91+ 9977763947</Text>
      </ImageBackground>

      <DrawerItemList {...props} />
      <Seperator />
    </DrawerContentScrollView>
  </View>
);

export default CustomDrawer;

const seperatorStyles = StyleSheet.create({
  height: 2,
  width: '100%',
  backgroundColor: 'black',
});
const Seperator = () => <View style={seperatorStyles} />;
