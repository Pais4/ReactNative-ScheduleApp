import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AppointmentStack } from './src/Stacks/AppointmentStack';
import { ScheduleStack } from './src/Stacks/ScheduleStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen 
          name='Appointment' 
          component={AppointmentStack} 
          options={{
            tabBarLabel: 'Appointment',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name='Schedule' 
          component={ScheduleStack} 
          options={{
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-plus-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


