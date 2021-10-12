import React from "react";
import { View, Text, Button } from "react-native";

const ThirdScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>Screen 3</Text>
      <Button
        title='Go to Drawer navigation'
        onPress= {() => navigation.navigate('drawer') }
      />
    </View>
  );
};

export default ThirdScreen;
