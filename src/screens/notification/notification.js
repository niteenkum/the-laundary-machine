import React, {useEffect, useContext} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Background, TextBox, Loader} from '../../components';
import NotiIcons from '../../appResources/svg/notifitionIcons';
import {colors, spacing, scales, styles} from '../../appResources';
import {connect} from 'react-redux';
import {getNotification} from '../../redux/actions/auth.action';
import CircleImage from '../../components/card/Circle';
import {shortDate} from '../../utils/functions';
import UserContext from '../../navigation/UserContext';
const Notification = props => {
  const {LngCode} = useContext(UserContext);
  useEffect(() => {
    props.getNotification();
  }, []);
  const onMoveTo = (screen, params = {}) => {
    props.navigation.navigate(screen, params);
  };
  const renderItem = ({item}) => {
   
    return (
      <TouchableOpacity 
      onPress={() => onMoveTo('OrderDetails', {orderid: item.order_id})}
      style={styles.notibox}>
        <View style={styles.notiInner}>
          {item.image ? (
            <CircleImage
              imageStyle={{width: spacing(30), height: spacing(30)}}
              resizeMode="contain"
              style={{
                borderWidth: 0,
                backgroundColor: '#00000000',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 0,
              }}
              size={scales(40)}
              image={item.image}
            />
          ) : (
            <NotiIcons />
          )}
          {/* {t.icon({type: t.type})} */}
        </View>
        <View style={{marginLeft: spacing(30), flex: 1}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextBox type="body5" style={{flex: 1}}>
              {item.title}
            </TextBox>
            <TextBox numberOfLines={3} type="caption">
              {shortDate(item.created_at)}
            </TextBox>
          </View>
          <TextBox numberOfLines={3} type="caption">
            {item.notification}
          </TextBox>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Background
      Backloading={props.loading2}
      {...props}
      headerTitle={LngCode.NOTI_MENU }
      headerRight={() => <View />}
      bodyStyle={{marginTop: spacing(20), backgroundColor: colors.ligthGray3}}>
      {!props.noti.length && !props.loading2 ? (
        <Loader title={LngCode.MSG_NO_NOTI} loader={false} />
      ) : (
        <FlatList data={props.noti} renderItem={renderItem} />
      )}
    </Background>
  );
};
const mapStateToProps = ({UserData}) => {
  const {noti = [], loading2} = UserData;
  console.log('UserData', UserData);
  return {
    noti,
    loading2,
  };
};

export default connect(
  mapStateToProps,
  {
    getNotification,
  },
)(Notification);
