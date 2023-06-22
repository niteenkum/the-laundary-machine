import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {colors, spacing} from '../../appResources';
import TextBox from '../TextBox';
import { isIos } from '../../appResources/others';
// import { colors, fonts } from '../../constants/variables';

export const PhoneInput = props => {
  const editable = props.editable === false ? false : true;
  const errorStyle = !props.error ? styles.inputBox : styles.errorStyle;
  const boxStyle = props.boxStyle ? props.boxStyle : {};
  return (
    <View style={[styles.box,props.style]}>
 
    <View style={{padding: spacing(6), flexDirection:'row', 
      borderRadius:5,
     borderColor:colors.gray,borderWidth:.5}}>
      <TextInput
        numberOfLines={props.numberOfLines}
        autoCapitalize='none'
        multiline={props.multiline}
        style={[styles.commanStyle, boxStyle, errorStyle]}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        maxLength={props.maxLength}
        keyboardType={
          props.keyboardType !== undefined ? props.keyboardType : 'default'
        }
        secureTextEntry={props.isPassword}
        editable={editable}
      />
       </View>
       {props.errorTo ? (
        <Text
          numberOfLines={1}
          style={{color: colors.red, fontSize: 10 }}>
          {props.errorMge}
        </Text>
      ) : (
        <Text style={{fontSize: 10}} />
      )}
      </View>
  );
};

export default PhoneInput
const styles = StyleSheet.create({
 
  commanStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
 paddingVertical:1,
    fontSize: 16,
    color: colors.grey,
    fontWeight: '300',
 
  },
  inputBox: {
    borderBottomWidth: 0,
    borderBottomColor: colors.lightGrey,
  },
  errorStyle: {
    borderBottomWidth: 1 ,
    borderBottomColor: colors.red,
  },
});
