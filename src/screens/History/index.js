import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import History from './history';
import OrderDetails from '../home/orderDetails' 

const HistoryStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="History">
    
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
     />
       <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{headerShown: false}}
     />
    </Stack.Navigator>
  );
};
export default HistoryStack;