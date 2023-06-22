import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from './home';
import TrackUser from './trackUser'
import GetLocation from '../getLocation'
import OrderDetails from './orderDetails'
import UserContext from '../../navigation/UserContext';
const HomeStack = () => {
 
  return (
    <Stack.Navigator
     initialRouteName="Home">
     <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="ErrorLocation"
        component={GetLocation}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="TrackUser"
        component={TrackUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetails1"
        component={OrderDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
