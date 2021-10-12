import React from 'react';
import {View, Text, Button} from 'react-native';

const FirstScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>Screen 1</Text>
      <Button title="Press ME"  onPress= {() => navigation.navigate('stack') }/>
    </View>
  );
};

export default FirstScreen;
