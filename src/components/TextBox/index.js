import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors ,fonts,fontSize} from '../../appResources';

const TextBox = (props) => {
    const type = props.type ? props.type : 'normal';
    const onPress = props.onPress ? props.onPress : () => {};
    const color = props.color ? colors[props.color] :  undefined
    
    return (
        <Text {...props} onPress={props.onPress} style={[styles[type], {color}, props.style]}>
            {props.children}
        </Text>
    )
}

export default TextBox;


const styles = StyleSheet.create({
    

     Button: {
      //  fontSize: fontSizes.h5,  //20
       color:colors.primary
    },
    body1: {
        fontSize:fontSize(12), //12
        color: colors.primary,
         fontFamily:fonts.semibold,
    },
    body2: {
        fontSize:fontSize(14),
        fontFamily:fonts.semibold,
        color: colors.primary
    },
    body3: {                 //18
        fontSize: fontSize(18),
        fontFamily:fonts.semibold,
     
    },
    body5: {
        fontSize:fontSize(16),
       fontFamily:fonts.semibold,
       },
   
    body4: {
        fontSize:fontSize(30),
       fontFamily:fonts.bold,
       },

    title: {
        fontSize:fontSize(20),
         fontFamily:fonts.bold,
    },
    title2: {
        fontSize:fontSize(40),
        fontFamily:fonts.bold,
    },
    // heading: {
    //     fontSize:fontSizes.caption, //12
    //    // fontFamily:fonts.reguler
    // },
    // heading2: {
    //     fontSize:fontSizes.subtitle1, //14
    //      color: colors.lightGrey2,
    //     // fontFamily:fonts.reguler
    // },
    heading3: {
        fontSize:fontSize(17), //15
       fontFamily:fonts.reguler,
         color: colors.title
    },
    caption0: {
        fontSize:fontSize(10), //15
        fontFamily:fonts.reguler,
        color: colors.gray,
    },
    caption: {
        fontSize:fontSize(13), //15
        fontFamily:fonts.reguler,
        color: colors.gray,
    },
    caption2: {
        fontSize:fontSize(15), //15
        fontFamily:fonts.reguler,
        color: colors.gray,
    },
    caption3: {
        fontSize:fontSize(17), //15
        fontFamily:fonts.reguler,
        color: colors.gray,
    },
    // caption2: {
    //     color: colors.lightGrey,
    //     fontSize: 15
    // }
})