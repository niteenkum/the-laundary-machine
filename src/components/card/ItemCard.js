import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import {PLAEHOLDER} from '../../appResources/res/images.json';
import {TextBox, Card, RoundBtn} from '..';
import {
  spacing,
  scales,
  colors,
  fontSize,
  fonts,
  SIGN,
  styles,
} from '../../appResources';
import {connect} from 'react-redux';
import {orderStatusChange} from '../../redux/actions/order.action';
import CircleImage from './Circle';
import Stars from '../StarRatting';
import UserContext from '../../navigation/UserContext';
import {getFullDate} from '../../utils/functions';

const ItemCart = props => {
  const {LngCode} = useContext(UserContext);
  const [rejectLoader, setRejectLoader] = useState(false);
  const [acceptLoader, setAccptLoader] = useState(false);
  const {
    customer = {},
    total_price,
    distance = '',
    delivery_address = {},
    pickup_address = {},
    status,
    id,
    pickup_date,
    delivery_date,
    pickup_time,
    delivery_time,
    rating_by_user,
    payment_type,
  } = props.item;

  useEffect(() => {
    const {status, message} = props.success;
    if (props.success && rejectLoader) {
      if (message) global.Toast(message);
      setRejectLoader(false);
      if (status) props.reject ? props.reject() : null;
    } else if (props.success && acceptLoader) {
      if (message) global.Toast(message);
      if (status) props.onPressAccept ? props.onPressAccept(id) : null;
      setAccptLoader(false);
    }
  }, [props, props.success]);

  const onRejectStatus = () => {
    setRejectLoader(true);
    const payload = {
      order_id: id,
      status: 0,
    };
    props.orderStatusChange(payload);
  };

  const onAcceptStatus = () => {
    setAccptLoader(true);
    const payload = {
      order_id: id,
      status: 1,
    };
    props.orderStatusChange(payload);
  };

  const showPaymentType = type => {
    const color = type == 'Cash On Delivery' ? 'card' : 'gray';
    const label =
      type == 'Cash On Delivery' ? LngCode.PAYMENT_COD : LngCode.PAYMENT_CC;
    if (type == 'Cash On Delivery')
      return (
        <TextBox type="caption" color={color} style={{textAlign: 'right'}}>
          {label}
        </TextBox>
      );
  };
  // const getAddress = (data = {}) => {
  //   const {address1, address2, landmark, zipcode} = data;
  //   return `${landmark || ""} - ${address1  || ""} ${address2  || ""} ${zipcode  || ""}`;
  // };
  const getAddress = (data = {}) => {
    const address1 = data?.address1 || '';
    const address2 = data?.address2 || '';
    const landmark = data?.landmark || '';
    const zipcode = data?.zipcode || '';

    return `${landmark} - ${address1} ${address2} ${zipcode}`;

  };
  return (
    <Card onPress={props.onPress} style={[styles.card5, props.style]}>
      <View style={styles.card6}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <CircleImage
            image={customer && customer.image ? customer.image : PLAEHOLDER}
            radius={scales(10)}
            size={scales(44)}
            style={{elevation: 0, borderWidth: 0}}
          />

          <View style={{flex: 1, marginLeft: spacing(15)}}>
            {customer && customer.last_name ? (
              <TextBox type="body3">
                {`${customer.first_name} ${customer.last_name}`}
              </TextBox>
            ) : null}
            <TextBox type="body2">#{id}</TextBox>
          
          </View>
          <View>
            <TextBox type="body5" style={{textAlign: 'right'}}>
              {SIGN}
              {total_price}
            </TextBox>
            {/* <TextBox type="caption" color="gray" style={{textAlign: 'right'}}>
              {distance ? distance : '00'} Km
            </TextBox> */}
          </View>
        </View>
        {props.reject ? showPaymentType(payment_type) : null}
      </View>

      <View style={[{padding: spacing(10)}, props.bodyStyle]}>
        <TextBox type="body1" color="gray" style={{marginBottom: spacing(4)}}>
          {LngCode.ADDRESS_LEBAL}
        </TextBox>
        <TextBox
          type="caption1"
          style={{marginTop: spacing(5), paddingBottom: spacing(10), flex: 1}}>
          {getAddress(pickup_address)}
        </TextBox>
        <View style={styles.line} />
        <TextBox type="body1" color="gray" style={{marginBottom: spacing(4)}}>
          {LngCode.PICK_UP_LABEL}
        </TextBox>
        <TextBox type="caption1" style={{marginTop: spacing(5), flex: 1}}>
          {getFullDate(pickup_date)} Between {pickup_time}
        </TextBox>
      </View>
      <View style={styles.line} />
      <View style={[{paddingHorizontal: spacing(10)}, props.bodyStyle]}>
        <TextBox type="body1" color="gray">
          {LngCode.DROP_OFF_LABEL}
        </TextBox>
        <View style={{flexDirection: 'row'}}>
          <TextBox type="caption1" style={{marginTop: spacing(5), flex: 1}}>
            {getFullDate(delivery_date)} Between {delivery_time}
            {'    '}
          </TextBox>
          {status == 0 || props.hide ? null : (
            <RoundBtn
              onPress={() => props.onOrderView(id)}
              type="BORDER"
              titleStyle={{
                fontSize: fontSize(13),
                fontFamily: fonts.semibold,
                color: colors.gray,
              }}
              title={LngCode.VIEW_ORDER_LABEL}
            />
          )}
        </View>
        {/* <View
        style={{
          width: '95%',
          height: 1,
          marginTop:spacing(10),
          backgroundColor: colors.ligthGray,
          alignSelf: 'center',
        }}
      /> */}
        {status === 0 ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <RoundBtn
              disabled={acceptLoader}
              onPress={onRejectStatus}
              style={{
                marginVertical: spacing(20),
                flex: 0.45,
                backgroundColor: colors.red,
              }}
              titleStyle={{
                fontSize: fontSize(18),
                fontFamily: fonts.bold,
                color: colors.white,
              }}
              loading={rejectLoader}
              title={LngCode.REJECT_LABEL}
            />
            <RoundBtn
              disabled={rejectLoader}
              loading={acceptLoader}
              onPress={onAcceptStatus}
              style={{marginVertical: spacing(20), flex: 0.45}}
              titleStyle={{
                fontSize: fontSize(18),
                fontFamily: fonts.bold,
                color: colors.white,
              }}
              title={LngCode.ACCEPT_LEBAL}
            />
          </View>
        ) : (
          <View style={{height: spacing(15)}} />
        )}
        {props.children}
      </View>
    </Card>
  );
};
const mapStateToProps = ({OrderData}) => {
  const {loading, success, fail, ActiveList = [],} = OrderData;
  console.log('sddsds.......................', OrderData);
  return {
    loading,
    success,
    fail,
    ActiveList,
 
  };
};

export default connect(mapStateToProps, {
  orderStatusChange,
})(ItemCart);
