import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView, View, Text, Platform} from 'react-native';
//import firebase from 'react-native-firebase';
import {setAsyncStorage} from '../../utils/asyncStorage';
import {colors, spacing, fontSize, STORAGES, styles} from '../../appResources';
import {BackGroundIcon} from '../../appResources/svg';
import UserContext from '../../navigation/UserContext';
import {PhoneInput, TextBox, RoundBtn, Card} from '../../components';
import {loginUser, driverDetails} from '../../redux/actions/auth.action';
import {connect} from 'react-redux';
import {loginToEmail, loginToPhone} from '../../utils/yupSchemas';
import apiService from '../../redux/services';
const device_type = Platform.OS;

const SignIn = props => {
  const {LngCode, setLng} = useContext(UserContext);

  const switcher = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorTo, setErrorTo] = useState('');
  const [errorMge, setErrorMge] = useState('');
  const [device_id, setDeviceid] = useState('');

  useEffect(() => {
    setFirbaseToken();
  }, []);

  useEffect(() => {
    const {success, fail} = props;

    if (success && loading) {
      console.log('success', success);
      if (success.status) saveToLocal(success);
      else if (success.errors) {
        const err = Object.values(success.errors) || [];
        setErrorTo('error');
        if (err.length) setErrorMge(err[0][0]);
      }
      setLoading(false);
    }
    if (fail && loading) {
      if (fail.response && fail.response.data)
        setErrorMge(fail.response.data.msg);
      else setErrorMge('Something went wrong.');
      setErrorTo('error');

      setLoading(false);
    }
  }, [props.success, props.loading, props.fail, props]);

  const saveToLocal = success => {
    const token = success.token;
    const {
      id,
      first_name,
      last_name,
      email,
      phone,
      image,
      dob,
      gender,
      average_rating,
    } = success.data;
    const data = {
      id,
      first_name,
      last_name,
      email,
      phone,
      image,
      token,
      dob,
      gender,
      average_rating,
    };
    apiService.setAuthorizationToken(token);
    props.driverDetails(data);
    setAsyncStorage(STORAGES.USER, JSON.stringify(data)).then(res => {
      switcher.setState('MainStack');
    });
  };
  const setFirbaseToken = () => {
    // firebase
    //   .messaging()
    //   .getToken()
    //   .then(device_id => {
    //     if (device_id) {
    //       console.log('device_id',device_id)
    //       setDeviceid(device_id);
    //     } else {
    //       console.log('device_id');
    //     }
    //   });
  };
  const onCallLoginApi = res => {
    //switcher.setState('MainStack')
    var payload = {
      phone: email,
      password: pass,
      device_id,
      device_type,
      role: 'driver',
    };
    props.loginUser(payload);
  };
  const onLogin = () => {
    setLoading(true);

    loginToPhone
      .validate({email, pass})
      .then(onCallLoginApi)
      .catch(res => {
        setLoading(false);
        setErrorTo(res.path);
        setErrorMge(res.message);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={styles.container2}>
        <BackGroundIcon style={{height: '80%'}} />
        <View />
      </View>
      <Card type="Empty" style={styles.card4}>
        <Text style={{fontWeight: '200', fontSize: fontSize(24)}}>
          <Text
            type="title"
            style={{fontWeight: 'bold', fontSize: fontSize(25)}}>
            {LngCode.LOGIN_LABEL}
          </Text>{' '}
          {LngCode.WITH_EMAIL_LABEL}
        </Text>
        <PhoneInput
          value={email}
          errorTo={'email' == errorTo}
          errorMge={errorMge}
          // keyboardType='numeric'
          onChange={e => setEmail(e)}
          style={{marginTop: spacing(25)}}
          placeholder={LngCode.EMAIL_PHONE_LABEL}
        />
        <PhoneInput
          value={pass}
          errorTo={'pass' == errorTo}
          errorMge={errorMge}
          onChange={p => setPass(p)}
          style={{marginTop: spacing(20)}}
          placeholder={LngCode.PASSWORD_LABEL}
          isPassword
        />
        <TextBox
          style={{
            marginBottom: spacing(30),
            alignSelf: 'center',
            color: colors.red,
          }}>
          {errorTo == 'error' ? errorMge : ''}
        </TextBox>
        <RoundBtn
          loading={loading}
          onPress={() => onLogin()} //switcher.setState('MainStack')}
          title={LngCode.LAOGIN_LABEL_CAP}
          titleStyle={{color: colors.white}}
          style={{backgroundColor: colors.primary}}
        />
      </Card>
      <View>
        {/* <TextBox
          type="body2"
          onPress={()=>setLng(LngCode.LNG)}
          style={{
            marginVertical: spacing(10),
            width: '100%',
           
            textAlign: 'center',
          }} >{LngCode.LNG}
         </TextBox> */}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({UserData}) => {
  const {loading, success, fail} = UserData;
  return {
    loading,
    success,
    fail,
  };
};

export default connect(mapStateToProps, {
  loginUser,
  driverDetails,
})(SignIn);
