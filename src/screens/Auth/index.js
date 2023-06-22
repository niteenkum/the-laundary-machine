import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './signup'
import SignIn from './signin'
import OtpScreen from './otp'
const Stack = createStackNavigator(); 
 
 
const AuthStack = () => {
  return (
    
    <Stack.Navigator
    initialRouteName="SignIn">
      {/* <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
       />
        <Stack.Screen
        name="Otp"
        
        component={OtpScreen}
       /> */}
        <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
       />
       </Stack.Navigator>
  );
};
export default AuthStack