import React from "react";
import { View,Text, ActivityIndicator } from "react-native";
import TextBox from "./TextBox";
const Loader = props => {
    const {size='small',title='',loader=true,textStyle={},style={flex: 1}}=props //size =props.size=='large'?'large':'small'
    
  return (
    <View style={[{ padding:5,alignItems:'center' ,justifyContent:'center' },style]}>
    { loader?  <ActivityIndicator  size={size}/>:null}
       <TextBox type='body3' style={textStyle}>{title}</TextBox>
    </View>
  );
};

export  default Loader