import React from 'react';
import {View} from 'react-native';
import {TextBox} from '../../../components';
import {spacing, colors} from '../../../appResources';

const MenuCard = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.ligthGray,
        height: spacing(60),
        width: spacing(46),
        marginHorizontal: spacing(5),
        borderRadius: spacing(5),
      }}>
      <TextBox type="caption">{props.day}</TextBox>
      <TextBox type="caption3">{props.date}</TextBox>
    </View>
  );
};
export default MenuCard;
