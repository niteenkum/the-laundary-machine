import React, {useContext} from 'react';
import {View} from 'react-native';
import {Background, RoundBtn, Card, TextBox, ListCard} from '../../components';
import {colors, fontSize, spacing, svgHeight} from '../../appResources';

import CircleImage from '../../components/card/Circle';

import SettingIcons from '../../appResources/svg/settingicons';
import {connect} from 'react-redux';
import UserContext from '../../navigation/UserContext';
const Setting = props => {
  const {LngCode} = useContext(UserContext);
  const onMoveTo = (screen, params = {}) => {
    props.navigation.navigate(screen, params);
  };
  const {image, first_name, last_name} = props.Driver;

  return (
    <Background {...props} headerTitle={LngCode.SETTING_MENU} headerRight={() => <View />}>
      <Card
        onPress={() => onMoveTo('EditProfile1')}
        type="Empty"
        style={{marginTop: spacing(20)}}>
        <ListCard
          title={first_name + ' ' + last_name}
          renderLeft={<CircleImage size={spacing(60)} image={image} />}
        />
      </Card>

      <Card type="Empty" style={{marginTop: spacing(20), padding: 0}}>
        <ListCard
          onPress={() => onMoveTo('ChangePassword')}
          borderWidth={1}
          title={LngCode.CHANGE_PASS_LABEL}
          renderLeft={<SettingIcons />}
        />
        <ListCard
          onPress={() => onMoveTo('WebPage', {Header: LngCode.PRIVACY_LABEL,id:0})}
          title={LngCode.PRIVACY_LABEL}
          borderWidth={1}
          renderLeft={<SettingIcons type="Terms" backColor="gray" />}
        />
        <ListCard
          onPress={() => onMoveTo('WebPage', {Header: LngCode.TERM_LABEL,id:1})}
          title={LngCode.TERM_LABEL}
          renderLeft={<SettingIcons type="cart" backColor="red" />}
        />
      </Card>
    </Background>
  );
};

const mapStateToProps = ({UserData}) => {
  const {Driver} = UserData;

  return {Driver};
};

export default connect(
  mapStateToProps,
  {},
)(Setting);
 
