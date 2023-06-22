import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import  EditProfile1 from '../Profile/editProfile'
import Setting from './setting'
import ChangePassword from './changepassword'
import WebPage from './webPage'
const SettingStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="EditProfile1"
        component={EditProfile1}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="ChangePassword"
        options={{headerShown: false}}
        component={ChangePassword}
      
      />
         <Stack.Screen
        name="WebPage"
        options={{headerShown: false}}
        component={WebPage}
      
      />
     </Stack.Navigator>
  );
};
export default SettingStack;