import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Example } from 'NoDhoka/src/screens';
import { useTheme } from '../../hooks';
// import { changeTheme, ThemeState } from '../../store/theme';
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { Colors, Fonts } = useTheme();

  return (
    <Tab.Navigator
  
      
    >
      <Tab.Screen
        name="Home"
        component={Example}
        options={{
          tabBarIcon: ({ focused }) => (
           
             <AntDesign  name={focused ? 'home' : 'home'} size={30}   color={focused ? '#007BFF' : Colors.textGray200} // Use your shade of blue here
             style={{
               textShadowColor: focused ? '#007BFF' : 'transparent',
               textShadowOffset: focused ? { width: 0, height: 2 } : { width: 0, height: 0 },
               textShadowRadius: focused ? 4 : 0,
             }} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Example}
        options={{
          tabBarIcon: ({ focused }) => (
             <AntDesign   name="contacts" size={30}  color={focused ? Colors.success : Colors.textGray200} />
           
            
            
          ),
        }}
      />
      <Tab.Screen
        name="phone-call"
        component={Example}
        options={{
          tabBarIcon: ({ focused }) => (
             <Feather   name="phone-call" size={30} color={focused ? Colors.success : Colors.textGray200} />
            
          ),
        }}
      />
      <Tab.Screen
        name="mezssage"
        component={Example}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign   name="message1" size={30}  color={focused ? Colors.success : Colors.textGray200} />
            
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Example}
        options={{
          tabBarIcon: ({ focused }) => (
             <AntDesign   name="profile" size={30}  color={focused ? Colors.success : Colors.textGray200} />
            
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
