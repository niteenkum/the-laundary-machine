import React, {useState, useEffect, useContext} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import {connect} from 'react-redux';
import ActionSheet from 'react-native-action-sheet-xg';
import {
  Background,
  RoundBtn,
  Card,
  TextBox,
  ListCard,
  InputBox,
} from '../../components';
import {
  colors,
  fontSize,
  spacing,
  svgHeight,
  scales,
  STORAGES,
  GENDER,
} from '../../appResources';
import {PLAEHOLDER} from '../../appResources/res/images.json';
import CircleImage from '../../components/card/Circle';
import CameraIcon from '../../appResources/svg/camera';
import {saveProfle, driverDetails} from '../../redux/actions/auth.action';
import {ProfileSchema} from '../../utils/yupSchemas';
import {setAsyncStorage} from '../../utils/asyncStorage';
import UserContext from '../../navigation/UserContext';
import apiService from '../../redux/services';

function EditProfile(props) {
  const {LngCode} = useContext(UserContext);
  let actionSheet = null;
  const [loading, setLoading] = useState(false);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('M');
  const [birthday, setBirthday] = useState('2020-01-20');
  const [fileName, setFileName] = useState('');
  const [mime, setMime] = useState('');
  const [img, setImg] = useState(null);
  const [errorTo, setErrorTo] = useState('');
  const [errorMge, setErrorMge] = useState('');
  const storedToken = apiService.getAuthorizationToken();
  storedToken.replace('Bearer ');
  useEffect(() => {
    const {
      first_name,
      last_name,
      phone,
      email,
      gender = 'm',
      dob = '2020-01-20',
      image,
    } = props.Driver;
    setFName(first_name);
    setLName(last_name);
    if (phone) setPhone(phone);
    if (email) setEmail(email);
    if (gender) setGender(gender);
    if (image) setImg(image);
    if (dob) setBirthday(dob);
  }, []);

  useEffect(() => {
    const {success} = props;
    if (success && loading) {
      let {status, token, data} = success;
      if (!token) token = storedToken.replace('Bearer ', '');
      if (status) {
        const data1 = {
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          image: data.image,
          token,
          dob: data.dob,
          gender: data.gender,
          average_rating: data.average_rating,
        };

        props.driverDetails(data1);

        setAsyncStorage(STORAGES.USER, JSON.stringify(data1)).then(res => {
          props.navigation.goBack();
        });
      }
      setLoading(false);
    }
  }, [props, props.success]);

  const headerBtn = title => (
    <RoundBtn
      onPress={() => onCkeckHeacder(title)}
      type="LEFT"
      title={title}
      titleStyle={{
        color: colors.primary,
        fontSize: fontSize(17),
        marginLeft: title === LngCode.LABEL_CANCEL ? spacing(10) : 0,
      }}
    />
  );

  const onCkeckHeacder = type => {
    if (type === LngCode.LABEL_CANCEL) props.navigation.goBack();
    else {
      setLoading(true);
      ProfileSchema.validate({fname, lname, phone, email, gender, birthday})
        .then(res => {
          handleSubmit();
        })
        .catch(res => {
          console.log('d,aldlas', res);
          setLoading(false);
          setErrorTo(res.path);
          setErrorMge(res.message);
        });
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('first_name', fname);
    formData.append('last_name', lname);
    if (email) formData.append('email', email);
    if (phone) formData.append('phone', phone);
    if (gender) formData.append('gender', gender);
    if (birthday) formData.append('dob', birthday);
    if (img && fileName)
      formData.append('image', {
        uri: img,
        name: fileName,
        type: mime,
      });
    console.log('EditUserProfile handleSubmit', formData);
    props.saveProfle(formData);
  };

  const onCamera = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      mediaType: 'photo',
      cropping: false,
    }).then(image => {
      console.log('sds', image);
      setImg(image.path);
      setFileName(image.modificationDate);
      setMime(image.mime);
      //  self.setState({ image: response.path, mime: response.mime });
    });
  };
  const onAction = idx => {
    switch (idx) {
      case 0:
        setGender('F');
        break;
      case 1:
        setGender('M');
        break;
      default:
        break;
    }
  };
  const gender1 = gender ? GENDER[gender.toUpperCase()] : 'Male';
  return (
    <Background
      headerLeft={headerBtn(LngCode.LABEL_CANCEL)}
      {...props}
      headerTitle={' '}
      headerRight={() =>
        loading ? (
          <ActivityIndicator size="small" />
        ) : (
          headerBtn(LngCode.SAVE_LABEL)
        )
      }>
      <ScrollView>
        <Card
          type="Empty"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: spacing(200),
            flexDirection: 'row',
            paddingHorizontal: spacing(10),
          }}>
          <View>
            <View
              style={{
                width: svgHeight(90),
                height: svgHeight(90),
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: spacing(20),
              }}>
              <CircleImage
                size={svgHeight(100)}
                image={img || PLAEHOLDER}
                style={{position: 'absolute', borderColor: colors.ligthGray}}
              />
              <CameraIcon
                onPress={() => onCamera()}
                size={scales(35)}
                style={{elevation: 5}}
              />
            </View>
            <TextBox
              type="caption2"
              color="card"
              onPress={() => onCamera()}
              style={{textAlign: 'center'}}>
              {LngCode.LABEL_EDIT_PHOTO}
            </TextBox>
          </View>
        </Card>
        <TextBox type="caption3" color="gray" style={{padding: spacing(15)}}>
          {LngCode.LABEL_INFO}
        </TextBox>
        <Card type="Empty" style={{padding: 0}}>
          <ListCard
            editable
            errorTo={errorTo === 'fname'}
            errorMge={errorMge}
            title={"Name"}
            placeholder={"Name"}
            borderWidth={1}
            body={fname}
            onChangeText={t => {setFName(t.trim()), console.log(t);}}
          />
          <ListCard
            editable
            errorTo={errorTo === 'lname'}
            errorMge={errorMge}
            title={"Surname"}
            placeholder={"Last name"}
            borderWidth={1}
            body={lname}
            onChangeText={t => setLName(t.trim())}
          />
          {/* <ListCard editable={true} title="Username" borderWidth={1}  body={fname} onChangeText={t => setFName(t)} /> */}
          <ListCard
            editable
            errorTo={errorTo === 'phone'}
            errorMge={errorMge}
            title={LngCode.USER_PHONE_LABEL}
            placeholder={LngCode.USER_PHONE_LABEL}
            borderWidth={1}
            body={phone}
            onChangeText={t => setPhone(t)}
          />
          <ListCard
            editable
            errorTo={errorTo === 'email'}
            errorMge={errorMge}
            title={LngCode.EMAIL_LABEL}
            placeholder={LngCode.EMAIL_ADD_LABEL}
            borderWidth={1}
            body={email}
            onChangeText={t => setEmail(t)}
          />
          {/* <ListCard
            hide
            title={LngCode.GENDER_LABEL}
            placeholder={LngCode.GENDER_LABEL}
            errorTo={errorTo === 'gender'}
            errorMge={errorMge}
            borderWidth={1}
            body={gender1}
            onPress={() => actionSheet.show()}
          /> */}
          {/* <ListCard
            editable
            title={LngCode.BIRTHDAY_LABEL}
            errorTo={errorTo === 'birthday'}
            errorMge={errorMge}
            borderWidth={1}
            onRight={
              <DatePicker
                date={birthday}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1980-05-01"
                maxDate="2022-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                style={{}}
                customStyles={{
                  dateIcon: {
                    width: 0,
                    height: 0,
                  },
                  dateInput: {
                    borderWidth: 0,
                    backgrounColor: 'red',

                    margin: 0,
                    padding: 0,
                    alignItems: 'flex-end',
                  },
                }}
                onDateChange={date => setBirthday(date)}
              />
            }
          /> */}
        </Card>
      </ScrollView>
      <ActionSheet
        ref={o => (actionSheet = o)}
        title="Select your gender"
        options={['Female', 'Male', 'Cancel']}
        cancelButtonIndex={2}
        // destructiveButtonIndex={1}
        callback={onAction}
      />
    </Background>
  );
}

const mapStateToProps = ({UserData}) => {
  const {Driver, success, loading, fail} = UserData;
  console.log('profile render', UserData);
  return {
    Driver,
    success,
    loading,
    fail,
  };
};

export default connect(mapStateToProps, {saveProfle, driverDetails})(
  EditProfile,
);
