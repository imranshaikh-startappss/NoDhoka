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
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Who viewed my profile" component={Example} />
      <Drawer.Screen name="What's new in NoDhoka" component={Example} />
      <Drawer.Screen name="QR Scanner" component={Example} />
      <Drawer.Screen name="Notification" component={Example} />
      <Drawer.Screen name="Manage Blocking" component={Example} />
      <Drawer.Screen name="Share NoDhoka" component={Example} />
      <Drawer.Screen name="Dark Mode" component={Example} />
      <Drawer.Screen name="Settings" component={Example} />
      <Drawer.Screen name="Send FeedBack" component={Example} />
      <Drawer.Screen name="FAQ" component={Example} />
    </Drawer.Navigator>
  );
};

export default Drawer;
