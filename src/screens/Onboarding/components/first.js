import React, { useContext } from 'react';
import {View,SafeAreaView} from 'react-native';
import {TextBox} from '../../../components';
import OnBoardFirst from '../../../appResources/svg/first';
import {spacing, svgHeight, svgWidth} from '../../../appResources';
import UserContext from '../../../navigation/UserContext';

export const First = props => {
  const {LngCode}= useContext(UserContext);
   
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: .6, justifyContent: 'center', alignItems: 'center'}}>
        <OnBoardFirst
          style={{width: svgWidth(251.67), height: svgHeight(248.91)}}
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
            {LngCode.ACCEPT_JOB_LABEL}
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
