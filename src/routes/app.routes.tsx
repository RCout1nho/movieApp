import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Shows from '../pages/Shows';
import Search from '../pages/Search';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor="#E9042F"
      barStyle={{
        borderTopWidth: 1,
        borderColor: '#242424',
      }}
      screenOptions={{
        tabBarColor: '#252C39',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="local-movies" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shows"
        component={Shows}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="live-tv" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
