import * as React from 'react';
import {Button, View} from 'react-native';
import {TextBox} from '../components';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from '../screens/home';
import EarnStack from '../screens/Earing';
import HistoryStack from '../screens/History';
import NotiStack from '../screens/notification';
import SettingStack from '../screens/Setting';
import ProfileStack from '../screens/Profile';
import CustomDrawer from './Draver';
import OrderDetails from '../screens/orderDetails';
import GetLocation from '../screens/getLocation';
import Logout from '../screens/logout';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerType="slide"
      drawerStyle={{width: '80%'}}
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="ProfileStack" component={ProfileStack} />
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="EarnStack" component={EarnStack} />
      <Drawer.Screen name="HistoryStack" component={HistoryStack} />
      <Drawer.Screen name="NotiStack" component={NotiStack} />
      <Drawer.Screen name="SettingStack" component={SettingStack} />
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="DrawerStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="GetLocation" component={GetLocation} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
};
export default MainStack;
