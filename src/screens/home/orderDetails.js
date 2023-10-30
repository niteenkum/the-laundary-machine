import React, {useEffect, useState, useContext} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {SafeAreaView, View, ScrollView, Linking, FlatList} from 'react-native';
import {
  styles,
  colors,
  spacing,
  fontSize,
  fonts,
  SIGN,
} from '../../appResources';
import {
  ItemCard,
  TextBox,
  Card,
  RoundBtn,
  Background,
  Loader,
} from '../../components';
import {DeleteIcon, PhoneIcon, SenderIcon} from '../../appResources/svg';

import {connect} from 'react-redux';
import {
  onOrderDetails,
  orderStatusChange,
} from '../../redux/actions/order.action';
import UserContext from '../../navigation/UserContext';

const OrderDetails = props => {
  const {LngCode} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [out, setOut] = useState(false);
  const [dropLoader, setDropLoader] = useState(false);
  const [orderId, setOderId] = useState(0);

  useEffect(() => {
    watchPosition();
  }, []);

  useEffect(() => {
    if (props.success && dropLoader) {
      if (props.success) props.navigation.goBack();
    }
    if (props.orderDetils && loading) setLoading(false);
  }, [props, props.success]);

  const onMoveTo = (screen, params = {}) => {
    props.navigation.navigate(screen, params);
  };

  const onCalling = phone => {
    Linking.openURL(`tel:${phone}`);
  };

  const watchPosition = async (type = false) => {
    const {params = {}} = props.route;
    if (params.out) setOut(params.out);
    if (params.orderid) {
      props.onOrderDetails({order_id: params.orderid});
      setOderId(params.orderid);
    }
  };

  const onDropup = () => {
    setDropLoader(true);
    const {params = {}} = props.route;
    const payload = {
      order_id: params.orderid,
      status: 6,
    };
    props.orderStatusChange(payload);
  };
  const onPickup = sta => {
    console.log(payload, 'payload.......');
    setDropLoader(true);
    const {params = {}} = props.route;
    const payload = {
      order_id: params.orderid,
      status: sta,
    };
    props.orderStatusChange(payload);
  };

  const {
    data = {},
    items = [],
    order = {},
    products = [],
    distance = '00.0',
  } = props.orderDetils;

  var comm =
    data && data.vendor_income
      ? parseFloat(data.vendor_income).toFixed(2)
      : '00.0';

  const renderItem = props => {
    const {
      product,
      price_type,
      price,
      quantity,
      model_type,
      total_amount,

      item,
      service = {},
    } = props.item;

    console.log('item', props.item);
    const data = model_type === 'Product' ? product : item;
    return (
      <View
        style={{
          paddingHorizontal: spacing(10),
          paddingBottom: spacing(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <TextBox type="caption">
            {data && data.name ? data.name : ''}{' '}
          </TextBox>
          {service && service.name ? (
            <TextBox type="caption0" color="gray2">
              {' '}
              {service && service.name ? service.name : ''}
            </TextBox>
          ) : null}
        </View>
        <TextBox type="caption">
          {SIGN}
          {price} {price_type}* {quantity} = {SIGN}
          {total_amount}
        </TextBox>
      </View>
    );
  };

  return (
    <Background
      Backloading={props.loading}
      {...props}
      headerBack={true}
      headerTitle={`#${orderId}`}
      headerRight={() => <View />}
      style={[styles.container]}>
      <ScrollView style={{backgroundColor: colors.ligthGray}}>
        <ItemCard
          hide={true}
          reject
          bodyStyle={{padding: spacing(15)}}
          style={{margin: 0}}
          item={data}>
          <View
            style={{
              width: '95%',
              height: 1,
              backgroundColor: colors.ligthGray,
              marginBottom: spacing(20),
              alignSelf: 'center',
            }}
          />

          <TextBox type="body1" color="gray" style={{marginBottom: spacing(5)}}>
            {LngCode.ORDER_DETAILS_LABEL}
          </TextBox>
          <View style={{marginLeft: spacing(10)}}>
            {items.length ? (
              <TextBox type="body1" color="" style={{marginBottom: spacing(5)}}>
                {LngCode.ITEMS_LABEL}
              </TextBox>
            ) : null}
            <FlatList data={items} renderItem={renderItem} />
            {products.length ? (
              <TextBox type="body1" style={{marginBottom: spacing(5)}}>
                {LngCode.PRODUCT_LABEL}
              </TextBox>
            ) : null}
            <FlatList data={products} renderItem={renderItem} />
          </View>

          <View
            style={{
              width: '95%',
              height: 1,
              backgroundColor: colors.ligthGray,
              marginVertical: spacing(20),
              alignSelf: 'center',
            }}
          />
          <TextBox type="body1" color="gray" style={{marginBottom: spacing(5)}}>
            {LngCode.LABEL_PAYMENT}
          </TextBox>
          <TextBox
            style={{marginBottom: spacing(15)}}
            type="caption"
            color="title">
            {data.payment_type_title ? data.payment_type_title : 'COD'}
          </TextBox>
          <TextBox type="body1" color="gray">
            {LngCode.TOTEL_LABEL}
          </TextBox>

          {/* <View style={{flexDirection: 'row'}}>
            <TextBox type="caption2" color="title" style={{flex: 1}}>
              {LngCode.COMMISION_LABEL}
            </TextBox>
            <TextBox type="caption2" color="title">
              {SIGN}
              {comm}
            </TextBox>
          </View> */}

          <View style={{flexDirection: 'row'}}>
            <TextBox type="caption2" color="title" style={{flex: 1}}>
              Total
            </TextBox>
            <TextBox type="caption2" color="title">
              {SIGN}
              {data.price}
            </TextBox>
          </View>
          {data.promotion && data.promotion.promocode ? (
            <Card
              style={{
                borderRadius: 0,
                marginBottom: spacing(5),
                elevation: 1,
                padding: 0,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: spacing(5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextBox type="caption2">PromoCode Applied {''}</TextBox>

                  <TextBox
                    type="body2"
                    style={{
                      color: colors.primary,
                    }}>
                    {data.promotion.promocode}
                  </TextBox>
                </View>
                {items.length ? (
                  <TextBox type="caption2" style={{}}>
                    {SIGN} {''}
                    {data.promotion.discount_value / 100}
                  </TextBox>
                ) : null}
              </View>
              <TextBox type="caption" style={{}}>
                {data.promotion.description}
              </TextBox>
              {items.length ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: spacing(10),
                  }}>
                  <TextBox type="body2" style={{}}>
                    {LngCode.GRAND_TOTEL_LABEL}
                  </TextBox>
                  <TextBox type="caption2" color="title">
                    {SIGN}
                    {data.price -
                      (data.price * data.promotion.discount_value) / 100}
                  </TextBox>
                </View>
              ) : null}
            </Card>
          ) : null}
          <View
            style={{
              width: '95%',
              height: 1,
              backgroundColor: colors.ligthGray,
              marginVertical: spacing(20),
              alignSelf: 'center',
            }}
          />

          {out ? (
            <View style={{flexDirection: 'row'}}>
              {data?.phone ||
              data?.delivery_address?.phone ||
              data?.customer?.phone ? (
                <Card
                  type="RAUND"
                  onPress={() =>
                    onCalling(
                      data?.delivery_address?.phone ||
                        data?.phone ||
                        data?.customer?.phone,
                    )
                  }
                  style={{
                    flex: 1,
                    backgroundColor: colors.green,
                    height: spacing(65),
                  }}>
                  <PhoneIcon size={spacing(24)} />
                  <TextBox type="body2" color="white">
                    {LngCode.CALL_LEBEL}
                  </TextBox>
                </Card>
              ) : (
                <></>
              )}
              {/* {data?.delivery_address?.lat && data?.delivery_address?.lng ? <Card
                onPress={() => onMoveTo('TrackUser', {orderid: order.id})}
                type="RAUND"
                style={{
                  flex: 1,
                  backgroundColor: colors.gray3,
                  height: spacing(65),
                }}>
                <TextBox type="body2">{LngCode.LOCATION_LABEL}</TextBox>
              </Card> : <></>} */}
              {data?.status >= 4 ? (
                <Card
                  onPress={
                    data?.pickup_address?.address_url
                      ? () => {
                          Linking.openURL(data?.pickup_address?.address_url);
                        }
                      : null
                  }
                  type="RAUND"
                  style={{
                    flex: 1,
                    backgroundColor: colors.gray3,
                    height: spacing(65),
                  }}>
                  <TextBox type="body2">{LngCode.LOCATION_LABEL}</TextBox>
                </Card>
              ) : (
                <Card
                  onPress={
                    data?.delivery_address?.address_url
                      ? () => {
                          Linking.openURL(data?.delivery_address?.address_url);
                        }
                      : null
                  }
                  type="RAUND"
                  style={{
                    flex: 1,
                    backgroundColor: colors.gray3,
                    height: spacing(65),
                  }}>
                  <TextBox type="body2">{LngCode.LOCATION_LABEL}</TextBox>
                </Card>
              )}
            </View>
          ) : null}
        </ItemCard>
      </ScrollView>
      {out ? (
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: colors.ligthGray,
            paddingHorizontal: spacing(10),
            height: spacing(90),
            paddingVertical: spacing(10),
          }}>
          {data?.status === 1 ? (
            <RoundBtn
              loading={dropLoader}
              onPress={() => {
                onPickup(2);
              }}
              titleStyle={{
                fontSize: fontSize(18),
                fontFamily: fonts.bold,
                color: colors.white,
              }}
              title={LngCode.OUT_FOR_PICKUP}
            />
          ) : data?.status === 2 ? (
            <RoundBtn
              loading={dropLoader}
              onPress={() => {
                onPickup(3);
              }}
              titleStyle={{
                fontSize: fontSize(18),
                fontFamily: fonts.bold,
                color: colors.white,
              }}
              title={LngCode.PICKED_UP}
            />
          ) : data?.status === 5 ? (
            <RoundBtn
              loading={dropLoader}
              onPress={onDropup}
              titleStyle={{
                fontSize: fontSize(18),
                fontFamily: fonts.bold,
                color: colors.white,
              }}
              title={LngCode.DELIVERED}
            />
          ) : (
            <></>
          )}
        </View>
      ) : null}
    </Background>
  );
};
const mapStateToProps = ({OrderData}) => {
  const {loading, fail2, fail, orderDetils = {}, success} = OrderData;
  console.log('sddsds', OrderData);
  return {
    loading,
    fail,
    orderDetils,
    success,
  };
};

export default connect(mapStateToProps, {
  onOrderDetails,
  orderStatusChange,
})(OrderDetails);
