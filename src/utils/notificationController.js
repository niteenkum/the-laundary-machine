import React, {useEffect} from 'react';
import {Platform} from 'react-native'
//import NavigationService from '../../utils/navigationService';
import firebase from 'react-native-firebase';
import {setAsyncStorage, getAsyncStorage} from './asyncStorage';
 
import { colors } from '../appResources';
 
export const FCM_TOKEN = 'fcmToken';
export const isIos =Platform.OS==='ios'
export const   NotificationController =(props) =>{

  const checkVerified = () => {
    //props.checkUserVerified({hideErrorPop: true});
  }

  useEffect(() => {
    checkPermission();

    const removeNotificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const data1 = notification._data ? notification._data : '';
        const channelId = new firebase.notifications.Android.Channel(
          'laundrychennal',
          'Default',
          firebase.notifications.Android.Importance.High,
          ).setSound("default");
        firebase.notifications().android.createChannel(channelId);

        let notification_to_be_displayed = new firebase.notifications.Notification(
          {
            data: data1,
            show_in_foreground: true,
            title: notification._title,
            body: notification._body,
          },
        );

        if (!isIos) {
          notification_to_be_displayed.android
            .setPriority(firebase.notifications.Android.Priority.High)
            .android.setChannelId('Ambrogio')
            .android.setVibrate(1000)
            .setSound(channelId.sound)
            .android.setSmallIcon('@drawable/logo')
            .android.setAutoCancel(true)
            .android.setColor(colors.noti);
        }
       
        firebase
          .notifications()  
          .displayNotification(notification_to_be_displayed);
      });

   

    return () => {
      removeNotificationListener();
 
    };
  }, []);

  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const getToken = async () => {
    let fcmToken = await getAsyncStorage(FCM_TOKEN);
    console.log('fcmToken', fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        setAsyncStorage(FCM_TOKEN, fcmToken);
      }
    }
  };

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      getToken();
    } catch (error) {
      console.log('permission rejected');
    }
  };

  return false;
}

 