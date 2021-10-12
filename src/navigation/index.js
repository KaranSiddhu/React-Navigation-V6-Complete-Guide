import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllScreenTabNavigator from './appTabNavigator';
import AllDrawerNavigation from './appDrawerNavigator';
import StackNavigation from './appStackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AllAppNavigation = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <AllAppNavigation.Navigator
      initialRouteName="tab"
      screenOptions={{
        header: () => null,
      }}>

      <AllAppNavigation.Screen name="tab" children={AllScreenTabNavigator} />
      <AllAppNavigation.Screen name="stack" children={StackNavigation} />
      <AllAppNavigation.Screen name="drawer" children={AllDrawerNavigation} />
    
    </AllAppNavigation.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
