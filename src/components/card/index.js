import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { colors, spacing } from '../../appResources';

const Card = (props) => {
  const style = props.type ? styles[props.type] :{};
  const enable =props.onPress ?false:true
    return (
        <TouchableOpacity 
         disabled={enable} 
         onPress={props.onPress}
         style={[ styles.container, style, props.style]}>
          {props.children}
        </TouchableOpacity>
      );
}

export default Card;

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        padding: 15,
        backgroundColor: colors.white,
        borderRadius: 5,
    },

    list : {
      elevation: 2, 
      shadowOpacity: 0.3, 
      shadowRadius: 3,
    } ,
    Empty : {
  
      elevation:0 , 
      shadowOpacity: 0, 
      shadowRadius: 0,
    } ,
    RAUND:{
      elevation:0,
      height: spacing(25),
      shadowOpacity:0,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: spacing(5),
      paddingHorizontal:  spacing(10),
      textAlign:'center',
      paddingVertical: spacing(5),
      borderRadius: spacing(10),
       }
})