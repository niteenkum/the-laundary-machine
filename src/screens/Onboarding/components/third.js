import React, { useContext } from 'react';
import {View, SafeAreaView} from 'react-native';
import {TextBox, RoundBtn} from '../../../components';
import OnBoardThird from '../../../appResources/svg/third';
import {spacing, svgHeight, svgWidth, colors, fonts} from '../../../appResources';
 
import UserContext from '../../../navigation/UserContext';
export const Third = props => {
  const {LngCode}= useContext(UserContext);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
        <OnBoardThird
          style={{width: svgWidth(249.56), height: svgHeight(256.58)}}
        />
      </View>
      <View style={{flex: 0.4, alignItems: 'center'}}>
        <View
          style={{
            flex: 1,

            justifyContent: 'space-around',
            paddingHorizontal: spacing(31),
          }}>
          <TextBox color="title" style={{textAlign: 'center'}} type="body4">
            {LngCode.EARN_LABEL}
          </TextBox>
          <TextBox color="title" style={{textAlign: 'center'}} type="heading3">
            {LngCode.ACCEPT_JOB_DES}
          </TextBox>
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: spacing(30),
            justifyContent: 'center',
          }}>
          <RoundBtn 
          onPress={()=>props.onSwitch()}
          title={LngCode.STARTED_LEBAL}
          titleStyle={{color:colors.white, fontFamily:fonts.bold,}}
          />
        </View>
      </View>
    </View>
  );
};
