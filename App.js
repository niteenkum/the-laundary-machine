/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useRef } from 'react';
//import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import RootStack from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
 import SplashScreen from 'react-native-splash-screen'
import CustomToast from './src/components/customToast';
import 'moment/locale/it';
// import codePush from './src/codepush';

const App = () =>  {
  const toustRef =useRef(null)

 // enableScreens(); 
  
 
useEffect(()=>{
  SplashScreen.hide();
  console.disableYellowBox = true;
  global.Toast = Msg => toustRef.current.ShowToastFunction(Msg);
},[])

  return [
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />,
      <Provider store={store}>
      <RootStack />
      <CustomToast ref={ref=>toustRef.current=ref} position="bottom" />
    </Provider>,
  ];
};

export default App;
