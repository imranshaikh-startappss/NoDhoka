import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Example } from 'NoDhoka/src/screens';
import { useTheme } from '../../hooks';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
// import Ripple from 'react-native-material-ripple';


const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
  const { Colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconSize = 30;
          let iconColor = focused ? Colors.success : "grey";

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Contacts') {
            iconName = 'contacts';
          } else if (route.name === 'PhoneCall') {
            iconName = 'phone-call';
          } else if (route.name === 'Message') {
            iconName = 'message1';
          } else if (route.name === 'Profile') {
            iconName = 'profile';
          }

          if (iconName) {
            const IconComponent = iconName === 'phone-call' ? Feather : AntDesign;

            return (
              // <Ripple
              // rippleColor='green'     // Set ripple color to green
              //   rippleCentered={true}   // Center the ripple
              //   rippleDuration={1500} 
              //   rippleOpacity={0.95} 
              //   rippleSize={500}  
              //   >
              //   <IconComponent name={iconName} size={iconSize} color={iconColor}/>
              // </Ripple>
               <IconComponent name={iconName} size={iconSize} color={iconColor}/>
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Example} />
      <Tab.Screen name="Contacts" component={Example} />
      <Tab.Screen name="PhoneCall" component={Example} />
      <Tab.Screen name="Message" component={Example} />
      <Tab.Screen name="Profile" component={Example} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;


