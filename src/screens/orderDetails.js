import React, {useEffect, useState, useContext} from 'react';
import {SafeAreaView, View, ScrollView, Linking, FlatList} from 'react-native';
import {styles, colors, spacing, fontSize, fonts, SIGN} from '../appResources';
import {
  ItemCard,
  TextBox,
  Card,
  RoundBtn,
  Background,
  Loader,
} from '../components';
import {connect} from 'react-redux';
import {onOrderDetails} from '../redux/actions/order.action';
import UserContext from '../navigation/UserContext';
const Line = () => (
  <View
    style={{
      width: '95%',
      height: 1,
      backgroundColor: colors.ligthGray,
      marginVertical: spacing(20),
      alignSelf: 'center',
    }}
  />
);

const OrderDetails = props => {
  const {LngCode} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOderId] = useState(0);

  useEffect(() => {
    const {params = {}} = props.route;
    if (params.orderid) {
      setLoading(true);
      setOderId(params.orderid);
      props.onOrderDetails({order_id: params.orderid});
    }
  }, []);

  useEffect(() => {
    if (props.orderDetils && loading) setLoading(false);
  }, [props]);

  const onMoveTo = (screen, params = {}) => {
    props.navigation.navigate(screen, params);
  };

  const onCalling = phone => {
    Linking.openURL(`tel:${phone}`);
  };

  const renderItem = props => {
    const {
      product,
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
          <TextBox type="caption">{data.name} </TextBox>
          {service && service.name ? (
            <TextBox type="caption0" color="gray2">
              {' '}
              {service && service.name ? service.name : ''}
            </TextBox>
          ) : null}
        </View>
        <TextBox type="caption">
          {SIGN}
          {price} * {quantity} = {SIGN}
          {total_amount}
        </TextBox>
      </View>
    );
  };

  const {data = {}, items = [], order = {}, products = []} = props.orderDetils;
  var comm =
    data && data.vendor_income
      ? parseFloat(data.vendor_income).toFixed(2)
      : '00.0';
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
          <Line />
          <TextBox type="body1" color="gray" style={{marginBottom: spacing(5)}}>
          {LngCode.LABEL_PAYMENT}
          </TextBox>
          <TextBox
            style={{marginBottom: spacing(15)}}
            type="caption"
            color="title">
            {data.payment_type_title ? data.payment_type_title : 'COD'}
          </TextBox>
          <Line />
          <TextBox type="body1" color="gray">
            TOTAL
          </TextBox>
          {/* <View style={{flexDirection: 'row'}}>
          <TextBox type="caption2" color="title" style={{flex: 1}}>
            Total Amount
          </TextBox>
            <TextBox type="caption2" color="title">
            {SIGN}{parseFloat(order.price).toFixed(2)}
          </TextBox>
        </View> */}

          <View style={{flexDirection: 'row'}}>
            <TextBox type="caption2" color="title" style={{flex: 1}}>
              Commission
            </TextBox>
            <TextBox type="caption2" color="title">
              {SIGN}
              {comm}
            </TextBox>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextBox type="caption2" color="title" style={{flex: 1}}>
              Grand Total
            </TextBox>
            <TextBox type="caption2" color="title">
              {SIGN}
              {parseFloat(data.total_price).toFixed(2)}
            </TextBox>
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
        </ItemCard>
      </ScrollView>
    </Background>
  );
};
const mapStateToProps = ({OrderData}) => {
  const {loading, fail, orderDetils = {}} = OrderData;
  console.log('sddsds', OrderData);
  return {
    loading,
    fail,
    orderDetils,
  };
};

export default connect(
  mapStateToProps,
  {
    onOrderDetails,
  },
)(OrderDetails);
