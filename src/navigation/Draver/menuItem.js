import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors, spacing, fontSize, fonts} from '../../appResources';

const MenuItem = props => {
  return (
    <TouchableOpacity
      style={{width: '100%',paddingBottom:spacing(10)}}
      activeOpacity={0.5}
      onPress={props.onPress}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginLeft: spacing(30)}}>{props.icon}</View>
        <Text
          style={{
            flex: 1,
            color: props.active ? colors.primary : colors.title,
            marginLeft: 25,
            marginTop: 5,
            textAlign: 'left',
            textAlignVertical: 'center',
            fontFamily: fonts.semibold,
            fontSize: fontSize(17),
          }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
