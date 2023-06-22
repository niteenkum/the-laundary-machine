import React, {useEffect, useState, useContext} from 'react';
import {FlatList, ActivityIndicator,Text} from 'react-native';

import {Background, ItemCard, Loader, PageScrollView} from '../../components';
import {connect} from 'react-redux';
import {orderList} from '../../redux/actions/order.action';
import {changeDriverStatus} from '../../redux/actions/auth.action';
import {deviceDimensions} from '../../appResources';
import UserContext from '../../navigation/UserContext';

const Pickup = props => {
  const {LngCode} = useContext(UserContext);
  const [loadingApi, setLoadingApi] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusLoader, setStatusLoader] = useState(false);
  const [driverStatus, setDriverStatus] = useState(false);
  const [count, setcount] = useState(0);
  const [page, setPage] = useState(0);

  const onMoveTo = (screen, params = {}) => {
    props.navigation.navigate(screen, params);
  };
  onSubmit = () => {
    this.setState({loading: true});
    this.props.navigation.navigate('AllOrders', {from: 'schedule'});
  };

  useEffect(() => {
    // setLoading(true);
    // onWillFocus('noti');
    // if (props.DriverStatus === 'ONLINE') setDriverStatus(true);
    // const removeNotificationListener = firebase
    // .notifications()
    // .onNotification(notification => {
    //    if(notification)
    //  onWillFocus('noti')
    // })
    // return () => {
    //   removeNotificationListener();
    // };
  }, []);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      if (props.DriverStatus === 'ONLINE') setDriverStatus(true);
      else setDriverStatus(false);
    });

    const {online, fail2, loading2, pick_upData} = props;

    if (online && statusLoader) {
      setStatusLoader(false);
      setDriverStatus(!driverStatus);
    } else if (pick_upData.length > count && !props.loading) {
      setLoading(false);
      setLoadingApi(false);
      setcount(pick_upData.length);
      console.log('success..........................?????.', props.success);
    }
  }, [props, props.pick_upData]);

  const onGetOrderlist = (first = false) => {
    if (props.plast_page >= page && !loadingApi) {
      const payload = {
        type: `pick_up`,
        page_size: 5,
        page,
        first,
      };
      setLoading(true);
      setLoadingApi(true);
      props.orderList(payload);
      setPage(page + 1);
    }
  };
  // useEffect(() => {
  //     const payload = {
  //       type: `pick_up`,
  //       page_size: 10,
  //       page,
  //       first: page <= 1 ? true : false,
  //     };
  //     props.orderList(payload);
  //   }, [page]);
  useEffect(() => {
    if (page === 1) onGetOrderlist(true);
  }, [page]);

  const onWillFocus = type => {
    if (page === 1) onGetOrderlist(true);
    else setPage(1);
  };

  const onValueChange = st => {
    if (!statusLoader) {
      setStatusLoader(true);
      if (st) props.changeDriverStatus({online: 1});
      else props.changeDriverStatus({online: 0});
    }
  };

  const renderItem = ({item}) => {
    return (
      <ItemCard
        key={item.id}
        item={item}
        reject={() => onWillFocus()}
        onPressAccept={orderid => onMoveTo('TrackUser', {orderid})}
        onOrderView={orderid => onMoveTo('OrderDetails1', {orderid, out: true})}
      />
    );
  };

  const title = props.loading2
    ? LngCode.WAIT_LABEL
    : driverStatus
    ? LngCode.ONLINE_LABEL
    : LngCode.OFFLINE_LABEL;
  return (
    <>
      {/* <Text style={{textAlign:'center'}}>Pickup</Text> */}
      <PageScrollView
        loading={loadingApi}
        onReachedEnd={() => (!loadingApi ? onGetOrderlist() : null)}
        onRefresh={() => (!loadingApi ? onWillFocus() : null)}>
        {!props.loading && props.pick_upData.length <= 0 ? (
          <Loader
            loader={false}
            title={LngCode.MSG_NO_ORDERS}
            style={{
              flex: 1,
              height: deviceDimensions.height / 2,
              justifyContent: 'flex-end',
            }}
          />
        ) : (
          <FlatList
            data={props.pick_upData}
            keyExtractor={(item, index) => `list-item-${index}`}
            renderItem={renderItem}
            // ListFooterComponent={
            //   loadingApi ? <ActivityIndicator size="small" /> : null
            // }
          />
        )}
      </PageScrollView>
    </>
  );
};

const mapStateToProps = ({OrderData, UserData}) => {
  const {
    loading,
    success,
    fail,
    pick_upData = [],
    plast_page = 1,
    ptotal_income,
    ptotal_jobs,
  } = OrderData;
  const {loading2, online, fail2, DriverStatus} = UserData;

  return {
    loading,
    success,
    online,
    loading2,
    fail,
    fail2,
    pick_upData,
    plast_page,
    DriverStatus,
    ptotal_income,
    ptotal_jobs,
  };
};

export default connect(mapStateToProps, {
  orderList,
  changeDriverStatus,
})(Pickup);
