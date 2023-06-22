import React, {useEffect, useState} from 'react';

import MainStack from './draverStack';
import {NavigationContainer} from '@react-navigation/native';
import OnboadringStack from '../screens/Onboarding';
import {Loader} from '../components';
import apiService from '../redux/services';
import AuthStack from '../screens/Auth';
import {getAsyncStorage} from '../utils/asyncStorage';
import {STORAGES} from '../appResources';
import {UserProvider} from './UserContext';
import {connect} from 'react-redux';
import {driverDetails, driverStatusLocaliy,changeDriverStatus} from '../redux/actions/auth.action';
// import {NotificationController} from '../utils/notificationController';
import { code } from '../appResources/code';

const RootStack = props => {
  const [state, setState ] = useState('');
  const [lng, setLng] = useState('ITALY');
  const store = {
    state,
    setState,
    setLng,
    LngCode :code[lng]
  };

  useEffect(() => {
    let online =0
    getAsyncStorage(STORAGES.STATUS).then(res => {
      online=res==='ONLINE'?1:0
      props.driverStatusLocaliy(res);
    } );

    getAsyncStorage(STORAGES.USER)
      .then(res => {
        const data = JSON.parse(res);
        if(data && data.token)
        {  apiService.setAuthorizationToken(data.token);
            props.changeDriverStatus({online });
          setState('MainStack');
        }
        else if(data && data.screen)
        setState('AuthStack');
        else 
        setState('OnboadringStack');
        
      })
      .catch(er => {
        setState('OnboadringStack');
      });
  }, []);

  const renderStack = () => {
    switch (state) {
      case 'MainStack':
        return (
          <>
           <MainStack />
          </>
        );

      case 'OnboadringStack':
        return (<UserProvider value={store}>
        <OnboadringStack />
        </UserProvider>);
      case 'AuthStack':
        return <AuthStack />;
      default:
        return <Loader />;
    }
  };

  return (
    <UserProvider value={store}>
      <NavigationContainer>{renderStack()}</NavigationContainer>
      {/* <NotificationController /> */}
    </UserProvider>
  );
};
export default connect(
  null,
  {
    driverDetails,
    driverStatusLocaliy,
    changeDriverStatus
  },
)(RootStack);
