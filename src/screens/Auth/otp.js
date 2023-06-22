import React, {useState,useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {colors, spacing, scales, styles} from '../../appResources';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {PhoneInput, TextBox, RoundBtn} from '../../components';
import UserContext from '../../navigation/UserContext';
const OtpScreen = (props) => {
  const  switcher= useContext(UserContext)
  const [code, setCode] = useState('111');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{padding: spacing(20)}}>
        <TextBox type="body4">Phone Verification</TextBox>
        <TextBox type="caption3">Enter your OTP code here</TextBox>
      </View>
      <OTPInputView
        style={{width: '80%', height: 200, alignSelf: 'center'}}
        pinCount={4}
        code={code}   
        onCodeChanged={(code) => setCode(code)}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <RoundBtn
       onPress={()=>switcher.setState('MainStack')}
        title="VERIFY NOW"
        titleStyle={{color: 'white'}}
        style={{width: '80%', alignSelf: 'center'}}
      />
    </SafeAreaView>
  );
};
export default OtpScreen;
