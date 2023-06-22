import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import EditProfile from './editProfile'
import Profile from './profile'
const ProfileStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
     </Stack.Navigator>
  );
};
export default ProfileStack;