import React, {Component, Fragment, useContext} from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';
import {
  colors,
  scales,
  spacing,
  fontSize,
  svgHeight,
  styles,
} from '../../appResources';
import CircleImage from '../../components/card/Circle';
import {img1} from '../../appResources/res/images.json';
import {TextBox, Stars} from '../../components';
import {
  HomeIcon,
  EarnIcon,
  HistoryIcon,
  NotiIcon,
  SettingIcon,
  Logouticon,
} from '../../appResources/svg';
import {Card} from './card';
import MenuItem from './menuItem';
import {connect} from 'react-redux';
import {getFirstLastUpperCase} from '../../utils/functions';
import UserContext from '../UserContext';

const CustomDrawer = props => {
  const {LngCode, setLng} = useContext(UserContext);
  var name = '';
  const {navigation, activeItemKey} = props;

  const onMoveTo = screen => {
    navigation.closeDrawer();
    navigation.navigate(screen);
  };
  const {Driver = {}} = props;
  if (Driver) name = Driver.first_name + ' ' + Driver.last_name;
  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor: colors.primary}} />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 0.2, backgroundColor: colors.primary}}>
          <View style={styles.header}>
            <CircleImage
              onPress={() => onMoveTo('ProfileStack')}
              size={scales(70)}
              image={Driver ? Driver.image : null}
            />
            <View style={{marginLeft: spacing(20)}}>
              <TextBox
                color="white"
                type="body3"
                style={{fontSize: fontSize(20)}}>
                {getFirstLastUpperCase(name)}
              </TextBox>
              {/* <Stars size={scales(20)} rate={Driver.average_rating}/> */}
            </View>
          </View>
        </View>
        <View style={{flex: 1, paddingTop: spacing(30)}}>
          <MenuItem
            text={LngCode.HOME_MENU}
            icon={<HomeIcon size={svgHeight(30)} />}
            onPress={() => onMoveTo('HomeStack')}
            // active={activeItemKey === 'Notistack'}
          />
          {/* <MenuItem
            text={LngCode.EARN_MENU}
            icon={<EarnIcon size={svgHeight(30)} />}
            onPress={() => onMoveTo('EarnStack')}
            // active={activeItemKey === 'Notistack'}
          /> */}
          <MenuItem
            text={LngCode.HISTORY_MENU}
            icon={<HistoryIcon size={svgHeight(30)} />}
            onPress={() => onMoveTo('HistoryStack')}
            // active={activeItemKey === 'Notistack'}
          />
          <MenuItem
            text={LngCode.NOTI_MENU}
            icon={<NotiIcon size={svgHeight(30)} />}
            onPress={() => onMoveTo('NotiStack')}
            // active={activeItemKey === 'Notistack'}
          />
          <MenuItem
            text={LngCode.SETTING_MENU}
            icon={<SettingIcon size={svgHeight(30)} />}
            onPress={() => onMoveTo('SettingStack')}
            // active={activeItemKey === 'Notistack'}
          />
          <MenuItem
            text={LngCode.LOGOUT_MENU}
            icon={<Logouticon size={svgHeight(30)} />}
            onPress={() => onMoveTo('Logout')}
            // active={activeItemKey === 'Notistack'}
          />
        </View>
        {/* <TextBox
          type="body2"
          onPress={()=>setLng(LngCode.LNG)}
          style={{
            marginVertical: spacing(10),
            width: '100%',
           
            textAlign: 'center',
          }} >{LngCode.LNG}
         </TextBox> */}
      </SafeAreaView>
    </Fragment>
  );
};

const mapStateToProps = ({UserData}) => {
  const {Driver} = UserData;
  return {
    Driver,
  };
};

export default connect(mapStateToProps, {})(CustomDrawer);
