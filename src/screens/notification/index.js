import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
 
import {View, Text, SafeAreaView} from 'react-native';
import Notification from './notification'
const NotiScack = () => {
  return (
    <Stack.Navigator
    initialRouteName="Notification">
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
     </Stack.Navigator>
  );
};
export default NotiScack;