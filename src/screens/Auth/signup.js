import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {colors, spacing, scales} from '../../appResources';
import {BackGroundIcon} from '../../appResources/svg';

import {PhoneInput, TextBox, RoundBtn} from '../../components';
const SignUp = (props) => {
  const onMoveTo = (screen, params = {}) => {
    props.navigation.navigate(screen, params);
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          flex: 0.8,
          margin: spacing(20),
          overflow: 'hidden',
          borderRadius: spacing(5),
          backgroundColor: colors.white,
        }}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: colors.card2,
            overflow: 'hidden',
          }}>
          <View style={{paddingHorizontal: spacing(20), padding: spacing(10)}}>
            <Text style={{fontWeight: '200', fontSize: scales(27)}}>
              <Text
                type="title"
                style={{fontWeight: 'bold', fontSize: scales(25)}}>
                Sign UP
              </Text>{' '}
              with {`\n`} email and {`\n`}phone number
            </Text>
          </View>
          <BackGroundIcon />
          <View />
        </View>
        <View
          style={{
            flex: 0.5,
            padding: spacing(20),
            justifyContent: 'space-around',
          }}>
          <View>
            <PhoneInput placeholder="name@example.com" />
            <PhoneInput
              style={{marginTop: spacing(15)}}
              country
              placeholder="Phone number"
            />
          </View>
          <RoundBtn
            onPress={()=>onMoveTo('Otp')}
            title="SIGN UP"
            titleStyle={{color: colors.white}}
            style={{marginTop: spacing(30), backgroundColor: colors.darkBlue}}
          />
        </View>
      </View>
      <TextBox style={{textAlign: 'center'}}>
        Already have an account? <Text onPress={()=>onMoveTo('SignIn')}>Sign In</Text>
      </TextBox>
    </SafeAreaView>
  );
};
export default SignUp;
