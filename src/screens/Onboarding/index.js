import React,{useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import onBoading from './onboarding'
 
export const OnboadringStack=()=> {

  return (
    <Stack.Navigator
    headerMode="none"
    initialRouteName='onBoading'
    ><Stack.Screen name="onBoading" component={onBoading} />
     
    </Stack.Navigator>
  );
} 
export default OnboadringStack