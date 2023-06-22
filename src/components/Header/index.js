import React, {useEffect} from 'react';
import {View, StyleSheet, Switch, Platforms} from 'react-native';
import TextBox from '../TextBox';
import {colors, spacing, svgHeight, scales} from '../../appResources';
import HeaderLeft from '../roundBtn/headerLeft';
import RoundBtn from '../roundBtn';
import {MenuIcon, BackIcon} from '../../appResources/svg';

const InHeader = props => {
  const onLeftCleck = () => {
    if (props.nav) props.goBack ? props.nav.goBack() : props.nav.openDrawer();
  };
  return (
    <View
      style={{
        height: scales(45),
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {props.renderLeft ? (
        props.renderLeft
      ) : (
        <View style={{flex: 0.2}}>
          <RoundBtn onPress={onLeftCleck} type="LEFT">
            {props.goBack ? (
              <BackIcon size={svgHeight(20)} />
            ) : (
              <MenuIcon size={svgHeight(25)} />
            )}
          </RoundBtn>
        </View>
      )}
      <TextBox
        type="body3"
        style={{
          textAlign: 'center',
          flex: 0.8,
          height: spacing(30),

          justifyContent: 'center',
        }}>
        {props.title ? props.title : 'Home'}
      </TextBox>
      <View
        style={{flex: 0.2, alignItems: 'flex-end', paddingRight: spacing(10)}}>
        {props.renderRight ? (
          props.renderRight()
        ) : (
          <Switch
            style={
              Platform.OS == 'ios'
                ? {transform: [{scaleX: 0.5}, {scaleY: 0.5}]}
                : {}
            }
            trackColor={{
              true: colors.primary,
              false: Platform.OS == 'android' ? '#d3d3d3' : '#fbfbfb',
            }}
            thumbColor={[
              Platform.OS == 'ios'
                ? '#FFFFFF'
                : props.status
                ? colors.primary
                : '#ffffff',
            ]}
            ios_backgroundColor="#fbfbfb"
            style={[
              props.status
                ? inline_styles.switchEnableBorder
                : inline_styles.switchDisableBorder,
            ]}
            value={props.status}
            onValueChange={index => props.onValueChange(index)}
          />
        )}
      </View>
    </View>
  );
};
export default InHeader;
const inline_styles = StyleSheet.create({
  switchEnableBorder: {
    borderColor: colors.primary,
    borderWidth: 1,
  },

  switchDisableBorder: {
    borderColor: colors.gray,
    borderWidth: 1,
  },
});
