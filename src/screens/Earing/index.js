import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
 
import MyEarning from './myearning' 
import { colors } from '../../appResources';
import { View } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { HeaderLeft } from '../../components';
const EarnStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="MyEarning">
     <Stack.Screen
        name="MyEarning"
        component={MyEarning}
        options={{
          title: 'My Earning',
          headerStyle: {
            backgroundColor:  colors.card,
            elevation:0,
           },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerRight:()=><View/>,   }}
     />
 
    </Stack.Navigator>
  );
};
export default EarnStack