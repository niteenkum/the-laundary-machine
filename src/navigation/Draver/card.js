import React from 'react';
import {View} from 'react-native';
import {TextBox} from '../../components';
import {spacing} from '../../appResources';
export const Card = props => {
  return (
    <View style={{flex:1, alignItems: 'center'}}>
      {props.icon}
      <TextBox
        style={{textAlign: 'center', margin: spacing(2)}}
        color="white"
        type="body3">
        {props.title}
      </TextBox>
      <TextBox style={{textAlign: 'center'}} color="white">
        {props.body}
      </TextBox>
    </View>
  );
};
