import React, {useEffect, useState, useContext} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {
  styles,
  colors,
  spacing,
  svgHeight,
  scales,
  SIGN,
} from '../../appResources';
import DateSection from './components/dateSection';
import {
  InHeader,
  TextBox,
  Card,
  ItemCard,
  StickyHeader,
  Loader,
  PageScrollView,
} from '../../components';
import {CarIcon, DollerIcon} from '../../appResources/svg';
import {img2, img3, img4} from '../../appResources/res/images.json';
import {connect} from 'react-redux';
import {orderList} from '../../redux/actions/order.action';
import {set} from 'react-native-reanimated';
import UserContext from '../../navigation/UserContext';

const History = props => {
  const {LngCode} = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [fistLoad, setFistLoad] = useState(false);
  const [count, setCount] = useState(0);
  const [coords, setCoords] = useState({});
  const [page, setPage] = useState(0);
  const onMoveTo = (screen, params = {}) => {
    props.navigation.navigate(screen, params);
  };
  useEffect(() => {
    watchPosition();
    return onChage();
  }, []);
  const onChage = () => {
    setFistLoad(true);
  };
  useEffect(() => {
    const {historyData = []} = props;
    console.log(
      historyData,
      'historyData?????.................................',
    );
    if (historyData.length >= count && loading) {
      setCount(historyData.length);
      setLoading(false);
    }
  }, [props, props.historyData, props.loading]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      if (fistLoad) {
        setFistLoad(false);
        watchPosition();
      }
    });
  }, [props]);

  useEffect(() => {
    const payload = {
      type: `history`,
      page_size: 10,
      page,
      first: page <= 1 ? true : false,
    };
    props.orderList(payload);
  }, [page]);

  const onGetOrderlist = (first = false) => {
    if (first) setPage(1);
    else setPage(page + 1);
  };

  const watchPosition = async (type = false) => {
    setLoading(false);
    setPage(0);
    onGetOrderlist(true);
  };

  const onWillFocus = async () => {
    setPage(1);
    setCount(0);
    setFistLoad(true);
    {
      coords ? onGetOrderlist(true, coords) : watchPosition();
    }
  };
  const renderItem = ({item}) => {
    console.log('itemm', item);
    return (
      <ItemCard
        onPress={() => onMoveTo('OrderDetails', {orderid: item.id})}
        hide={true}
        item={item}
        onOrderView={orderid => onMoveTo('OrderDetails1', {orderid})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <InHeader
        nav={props.navigation}
        title={LngCode.HISTORY_MENU}
        renderRight={() => <View />}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.ligthGray,
          paddingHorizontal: spacing(10),
          paddingTop: spacing(10),
        }}>
        {!props.loading && props.historyData.length <= 0 ? (
          <Loader
            loader={false}
            textStyle={{textAlign: 'center'}}
            title={LngCode.MSG_NO_HOSTORY}
            style={{flex: 1}}
          />
        ) : (
          <FlatList
            data={props.historyData}
            keyExtractor={(item, index) => `list-item2-${index}`}
            refreshControl={
              <RefreshControl
                refreshing={props.loading}
                onRefresh={() => (count >= 1 ? onWillFocus() : null)}
              />
            }
            renderItem={renderItem}
            onEndReached={() => (count >= 1 ? onGetOrderlist() : null)}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              loading ? <ActivityIndicator size="small" /> : null
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({OrderData}) => {
  const {
    loading,
    success,
    fail,
    historyData = [],
    hlast_page = 1,
    htotal_income,
    htotal_jobs,
  } = OrderData;

  return {
    loading,
    success,
    htotal_income,
    htotal_jobs,
    fail,
    historyData,
    hlast_page,
  };
};

export default connect(mapStateToProps, {
  orderList,
})(History);
