import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {colors} from '../../appResources';
// import { colors, fonts } from '../../constants/variables';

export const InputBox = props => {
  const editable = props.editable === false ? false : true;
  const errorStyle = !props.errorTo ? styles.inputBox : styles.errorStyle;
  const boxStyle = props.boxStyle ? props.boxStyle : {};
  return (
    <View style={props.inputStyle}>
    
      <TextInput
        numberOfLines={props.numberOfLines}
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

export default InputBox
const styles = StyleSheet.create({
  commanStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingBottom: 2,
    fontSize: 16,
    color: colors.grey,
    fontWeight: '300',
    paddingTop: 5,
  },
  inputBox: {
    borderBottomWidth: .5,
    borderBottomColor: colors.lightGrey,
  },
  errorStyle: {
    borderBottomWidth: 1 ,
    borderBottomColor: colors.red,
  },
});
