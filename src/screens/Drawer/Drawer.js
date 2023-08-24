import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from './SideMenu';
import About from './About';
import Contact from './Contact';
import Example from '../Example/Example';
import CustomDrawer from 'NoDhoka/src/components/CustomDrawer';

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen name="Homes" component={Example} />
      <Drawer.Screen name="About" component={Example} />
      <Drawer.Screen name="Contact" component={Example} />
    </Drawer.Navigator>
  );
};

export default Drawer;
