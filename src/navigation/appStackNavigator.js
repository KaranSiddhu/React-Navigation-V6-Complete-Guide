import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ThirdScreen from "../screens/ThirdScreen";


const StackNavigator = createNativeStackNavigator();

const StackNavigation = () => (
  <StackNavigator.Navigator
    initialRouteName="Third"
    screenOptions={{
      header: () => null
    }}
  >
    <StackNavigator.Screen component={ThirdScreen} name="Third" />
  </StackNavigator.Navigator>
);

export default StackNavigation;