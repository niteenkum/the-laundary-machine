import React from 'react';
import {View, TextInput,Text} from 'react-native';
import Card from '.';
import TextBox from '../TextBox';
import ArrowIcon from '../../appResources/svg/arrowRigth';
import {spacing, colors, fontSize, fonts} from '../../appResources';
const ListCard = props => {
  const editable = props.editable ? props.onPress? false:true : false;
  const borderWidth = props.borderWidth ? props.borderWidth : 0;
  return (
    <Card 
      onPress={props.onPress}
      type="Empty"
      style={[{
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingVertical: spacing(5),
        alignItems: 'center',
      },props.style]}>
      {props.renderLeft ? props.renderLeft : null}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',  alignItems: 'center',
          borderBottomWidth: borderWidth,
          borderBottomColor: colors.ligthGray,
          paddingVertical: spacing(5),
          marginLeft: spacing(10),
        }}>
        <TextBox type="caption3"  >
          {' ' +  props.title}
        </TextBox>
        <View style={{flex:1,alignItems:'flex-end'}}>
       {props.onRight?props.onRight:
       <View>
       <TextInput
          editable={ editable  }
         
          placeholder={props.placeholder }
          style={{textAlign: 'right',  fontSize:fontSize(17),  
          fontFamily:fonts.reguler,
          color: colors.gray,}}
          value={props.body}
          onChangeText={props.onChangeText}
        />
       { props.errorTo ? (
          <Text
            numberOfLines={1}
            style={{color: colors.red,alignSelf:'flex-end', fontSize: 10 }}>
            {props.errorMge}
          </Text>
        ) : (
          <Text style={{fontSize: 10}} />
        )}
        </View>
        }
          
      </View>
     {editable || props.hide ?<View style={{width: spacing(15),}}/>:    <ArrowIcon style={{marginHorizontal: spacing(10)}} size={spacing(12)} />}
      </View>
    </Card>
  );
};
export default ListCard;
