import React, {useEffect, useState, useContext} from 'react';
import {View} from 'react-native';

import {changePassSchema} from '../../utils/yupSchemas';
import {connect} from 'react-redux';
import {InputBox, Background, RoundBtn} from '../../components';
import {spacing, colors, fonts} from '../../appResources';
import {onchangepassword} from '../../redux/actions/auth.action';
import UserContext from '../../navigation/UserContext';
const ChangePassword = props => {
  const {LngCode}= useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [old, setOld] = useState('');
  const [newpass, setPass] = useState('');
  const [errorMsg, setErrorMge] = useState('');
  const [errorTo, setErrorTo] = useState('');
  useEffect(() => {
    const {success, fail} = props;
    if (success && loading) {
      setLoading(false);
      props.navigation.goBack();
    } else if (fail && loading) {
      setErrorTo('old');
      const {errors} = fail;
      if (errors) setErrorMge(errors.msg);
      setLoading(false);
    }
  }, [props]);
  const onCallApi = () => {
    props.onchangepassword({old, new: newpass});
  };
  const onSubmit = () => {
    setLoading(true);
    changePassSchema
      .validate({newpass, old})
      .then(onCallApi)
      .catch(res => {
        setLoading(false);
        setErrorTo(res.path);
        setErrorMge(res.message);
      });
  };

  return (
    <Background
      {...props}
      headerTitle={LngCode.CHANGE_PASS_LABEL}
      headerBack
      headerRight={() => <View />}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: spacing(20),
        }}>
        <InputBox
          errorMge={errorMsg}
          errorTo={errorTo === 'old'}
          placeholder={LngCode.OLD_PASS_LABEL}
          onChange={text => setOld(text.trim())}
          value={old}
          isPassword={true}
          inputStyle={{padding: spacing(10)}}
        />

        <InputBox
          onChange={text => setPass(text.trim())}
          value={newpass}
          errorMge={errorMsg}
          errorTo={errorTo === 'newpass'}
          placeholder={LngCode.NEW_PASS_LABEL}
          isPassword={true}
          inputStyle={{padding: spacing(10)}}
        />
        <RoundBtn
          loading={props.loading}
          onPress={() => onSubmit()}
          title={LngCode.SAVE_LABEL}
          titleStyle={{color: colors.white, fontFamily: fonts.bold}}
          style={{width: '80%', alignSelf: 'center', marginTop: spacing(20)}}
        />
      </View>
    </Background>
  );
};
const mapStateToProps = ({UserData}) => {
  console.log('mapStateToProps', UserData);
  const {loading = false, success, fail} = UserData;
  return {loading, success, fail};
};

export default connect(
  mapStateToProps,
  {
    onchangepassword,
  },
)(ChangePassword);
