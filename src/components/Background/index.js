import React, {Fragment} from 'react';
import {SafeAreaView,View} from 'react-native';
import {colors} from '../../appResources';
import InHeader from '../Header';
import Loader from '../loader';

const Background = props => {

  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor: colors.white}} >
      <InHeader
        goBack={props.headerBack}
        title={props.headerTitle}
        nav={props.navigation}
        renderLeft={props.headerLeft}
        renderRight={props.headerRight}
        status={props.switchStatus}
        onValueChange={props.onValueChange}
      />
       </SafeAreaView>
      <SafeAreaView
        style={[{
          flex: 1,
          backgroundColor: props.backColor ? props.backColor : colors.ligthGray,
        },props.bodyStyle]}>
         <View style={{flex:1}}>
        {props.Backloading?<Loader/>: props.children }
        </View> 
      </SafeAreaView>
    </Fragment>
  );
};

export default Background;
