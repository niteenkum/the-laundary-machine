import React,{useState, useContext} from 'react';
import {View, SafeAreaView} from 'react-native';
import {TextBox, RoundBtn} from '../components';
import {LocationIcon} from '../appResources/svg';
import {spacing, svgHeight, svgWidth, colors, fonts} from '../appResources';
import {check, PERMISSIONS, RESULTS, request,openSettings} from 'react-native-permissions';
import UserContext from '../navigation/UserContext';

const requestAll = async () => {
  const check = await request( Platform.select({
   android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
   ios:  PERMISSIONS.IOS.LOCATION_ALWAYS,
   }));
 
   return check;
 };

 const GetLocation = props => {
 
  const {LngCode}= useContext(UserContext);
  const requestPermission = () => {
     requestAll().then(response => {
      console.log("response",response)
     if (response ===  RESULTS.GRANTED) {
       props.navigation.goBack();
      } else  {
        openSettings()
      }
     });
  };
    return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <LocationIcon
          style={{width: svgWidth(261.65), height: svgHeight(229.4)}}
        />
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            paddingHorizontal: spacing(10),
          }}>
          <TextBox color="title" style={{textAlign: 'center'}} type="body4">
           {LngCode.LOCATION_ENABLE_LABRL}
          </TextBox>
          <TextBox color="title" style={{textAlign: 'center'}} type="heading3">
           {LngCode.LOCATION_DES}
          </TextBox>
        </View>
        <View  
          style={{
            flex: 1,
            marginBottom: spacing(30),
           }}>
          <RoundBtn 
          onPress={()=>requestPermission()}
          title={LngCode.STARTED_LEBAL} 
          titleStyle={{color:colors.white, fontFamily:fonts.bold,}}
          />
             <TextBox 
                       onPress={()=>props.navigation.goBack()}
             color="gray2" style={{textAlign:'center',marginTop:spacing(30)}} type="body3">
             {LngCode.SKIP_TXT}
          </TextBox>
        </View>
      </View>
    </View>
  );
};
export default GetLocation