import React, { useContext } from 'react';
import {View,SafeAreaView} from 'react-native';
import {TextBox} from '../../../components';
import OnBoardSecond from '../../../appResources/svg/second';
import {spacing, svgHeight, svgWidth} from '../../../appResources';
import UserContext from '../../../navigation/UserContext';
export const Second = props => {
  const {LngCode}= useContext(UserContext);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: .6, justifyContent: 'center', alignItems: 'center'}}>
        <OnBoardSecond
          style={{width: svgWidth(360.15), height: svgHeight(250)}}
        />
      </View>
      <View style={{flex: .4, alignItems: 'center'}}>
        <View
          style={{
            flex: 1,
           
            justifyContent: 'space-around',
            paddingHorizontal: spacing(31),
          }}>
          <TextBox color="title" style={{textAlign: 'center'}} type="body4">
           {LngCode.TRACKING_LABEL}
          </TextBox>
          <TextBox color="heading3" style={{textAlign: 'center'}} type="heading3">
           {LngCode.ACCEPT_JOB_DES}
          </TextBox>
        </View>
        <View style={{flex: 1,
        marginBottom:spacing(30),
        justifyContent: 'center'}}>
          <TextBox 
           onPress={()=>props.onSwitch()}
          color="gray2" type="body3">
            {LngCode.SKIP_TXT}
          </TextBox>
        </View>
      </View>
    </View>
  );
};
