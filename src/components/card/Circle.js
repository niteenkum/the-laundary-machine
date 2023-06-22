import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import {colors, spacing} from '../../appResources';
import {PLAEHOLDER} from '../../appResources/res/images.json'
const CircleImage = props => {
  const size = props.size ? props.size : 100;
  const radius =props.radius ?props.radius :size / 2
  const enable =props.onPress ?false:true
  const url = props.image?props.image:PLAEHOLDER
  return (
    <TouchableOpacity 
    disabled={enable} 
    onPress={props.onPress}
      style={[
        styles.container,
        {width: size, height: size, borderRadius: radius},
         props.style 
      ]}>
      
        <Image
          resizeMode={props.resizeMode?props.resizeMode:'cover'}
          source={{uri:url }}
          style={[{
            width:size,
            height: size,
          },props.imageStyle]}
        />
   
      {props.children}
    </TouchableOpacity>
  );
};

export default CircleImage;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.white,
    borderWidth:spacing(2),
    elevation: 5,
    overflow:'hidden',
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: colors.white,
    
  },
});
