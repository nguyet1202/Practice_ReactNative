import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountTime from '../../CountingTime';
import Users from '../../../Screens/users';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
      name="Users"
      component={Users}
      options={() => {
        return {
          tabBarLabel: ({focused}) => {
            return (
              <Text style={{color: focused ? 'red' : 'black'}}>{'Users'}</Text>
            );
          },
          tabBarIcon: ({color, size}) => (
              <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
                style={{width: 20, height: 20}}
              />
            ),
          headerShown: false,
        };
      }}
    />
    <Tab.Screen
      name="Count time"
      component={CountTime}
      options={() => {
        return {
          tabBarLabel: ({focused}) => {
            return (
              <Text style={{color: focused ? 'red' : 'black'}}>{'CountTime'}</Text>
            );
          },
          tabBarIcon: ({color, size}) => (
              <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
                style={{width: 20, height: 20}}
              />
            ),
          headerShown: false,
        };
      }}
    />
    </Tab.Navigator>
  )
}

export default BottomTab;

const styles = StyleSheet.create({})