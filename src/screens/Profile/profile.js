import React, {useState, useContext} from 'react';

import {Background, RoundBtn, Card, TextBox, ListCard} from '../../components';
import {
  colors,
  fontSize,
  spacing,
  svgHeight,
  scales,
  GENDER,
} from '../../appResources';

import CircleImage from '../../components/card/Circle';

import {connect} from 'react-redux';
import {getFirstLastUpperCase} from '../../utils/functions';
import Stars from '../../components/StarRatting';
import UserContext from '../../navigation/UserContext';

const ProfileScreen = props => {
  const {LngCode} = useContext(UserContext);
  var FullName = '';
  const headerLeft = () => {
    return (
      <RoundBtn
        onPress={() => props.navigation.navigate('EditProfile')}
        type="LEFT"
        title={LngCode.LABEL_EDIT_CAP}
        titleStyle={{color: colors.primary, fontSize: fontSize(16)}}
      />
    );
  };

  const {Driver = {}} = props;
  if (Driver) FullName = `${Driver.first_name} ${Driver.last_name}`;
  const gender = Driver.gender ? GENDER[Driver.gender.toUpperCase()] : 'Male';

  return (
    <Background {...props} headerTitle={' '} headerRight={headerLeft}>
      <Card type="Empty" style={{alignItems: 'center', height: scales(200)}}>
        <CircleImage size={svgHeight(100)} image={Driver.image} />
        <TextBox type="title" style={{marginTop: spacing(10)}}>
          {getFirstLastUpperCase(FullName)}
        </TextBox>
        {/* <Stars size={scales(22)} colorActive='card' rate={Driver.average_rating}/> */}
      </Card>
      <TextBox type="caption3" color="gray" style={{padding: spacing(15)}}>
        {LngCode.LABEL_INFO}
      </TextBox>
      <Card type="Empty" style={{padding: 0}}>
        <ListCard
          title={LngCode.USER_NAME_LABEL}
          borderWidth={1}
          body={FullName}
        />
        <ListCard
          title={LngCode.USER_PHONE_LABEL}
          borderWidth={1}
          body={Driver.phone}
        />
        <ListCard
          title={LngCode.EMAIL_LABEL}
          borderWidth={1}
          body={Driver.email}
        />
        <ListCard title={LngCode.GENDER_LABEL} borderWidth={1} body={gender} />
        <ListCard
          title={LngCode.BIRTHDAY_LABEL}
          borderWidth={1}
          body={Driver.dob}
        />
      </Card>
    </Background>
  );
};

const mapStateToProps = ({UserData}) => {
  const {Driver} = UserData;
  return {
    Driver,
  };
};

export default connect(mapStateToProps, {})(ProfileScreen);
