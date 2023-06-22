// import React, {useEffect, useState, useContext} from 'react';
// import {FlatList, ActivityIndicator} from 'react-native';

// import {Background, ItemCard, Loader, PageScrollView} from '../../components';
// import {connect} from 'react-redux';
// import {orderList} from '../../redux/actions/order.action';
// import {changeDriverStatus} from '../../redux/actions/auth.action';
// import {deviceDimensions} from '../../appResources';
// import UserContext from '../../navigation/UserContext';
// const Home = props => {
  // const {LngCode} = useContext(UserContext);
  // const [loadingApi, setLoadingApi] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [statusLoader, setStatusLoader] = useState(false);
  // const [driverStatus, setDriverStatus] = useState(false);
  // const [count, setcount] = useState(0);
  // const [page, setPage] = useState(0);

  // const onMoveTo = (screen, params = {}) => {
  //   props.navigation.navigate(screen, params);
  // };

//   useEffect(() => {
//     setLoading(true);
//     onWillFocus('noti');
//     if (props.DriverStatus === 'ONLINE') setDriverStatus(true);
//  const removeNotificationListener = firebase
//    .notifications()
//    .onNotification(notification => {
//         if(notification)
//     onWillFocus('noti')
//    })
//    return () => {
//    removeNotificationListener();
//    };
//   }, []);

  // useEffect(() => {
  //   props.navigation.addListener('focus', () => {
  //     if (props.DriverStatus === 'ONLINE') setDriverStatus(true);
  //     else setDriverStatus(false);
  //   });

  //   const {online, fail2, loading2, ActiveList} = props;

  //   if (online && statusLoader) {
  //     setStatusLoader(false);
  //     setDriverStatus(!driverStatus);
  //   } else if (ActiveList.length > count && !props.loading) {
  //     setLoading(false);
  //     setLoadingApi(false);
  //     setcount(ActiveList.length);
  //     console.log('success', props.success);
  //   }
  // }, [props, props.ActiveList]);

  // const onGetOrderlist = (first = false) => {
  //   if (props.last_page >= page && !loadingApi) {
  //     const payload = {
  //       type: `active`,
  //       page_size: 5,
  //       page,
  //       first,
  //     };
  //     setLoading(true);
  //     setLoadingApi(true);
  //     props.orderList(payload);
  //     setPage(page + 1);
  //   }
  // };

  // useEffect(() => {
  //   if (page === 1) onGetOrderlist(true);
  // }, [page]);

  // const onWillFocus = type => {
  //   if (page === 1) onGetOrderlist(true);
  //   else setPage(1);
  // };

  // const onValueChange = st => {
  //   if (!statusLoader) {
  //     setStatusLoader(true);
  //     if (st) props.changeDriverStatus({online: 1});
  //     else props.changeDriverStatus({online: 0});
  //   }
  // };

  // const renderItem = ({item}) => {
  //   return (
  //     <ItemCard
  //       key={item.id}
  //       item={item}
  //       reject={() => onWillFocus()}
  //       // onPressAccept={orderid => onMoveTo('TrackUser', {orderid})}
  //       onOrderView={orderid => onMoveTo('OrderDetails1', {orderid, out: true})}
  //     />
  //   );
  // };

  // const title = props.loading2
  //   ? LngCode.WAIT_LABEL
  //   : driverStatus
  //   ? LngCode.ONLINE_LABEL
  //   : LngCode.OFFLINE_LABEL;
//   return (
    // <Background
    //   onFocus={() => console.log('onfocus')}
    //   Backloading={props.loading}
    //   {...props}
    //   headerTitle={title}
    //   renderRight={false}
    //   switchStatus={driverStatus}
    //   onValueChange={onValueChange}>
      // <PageScrollView
      //   loading={loadingApi}
      //   onReachedEnd={() => (!loadingApi ? onGetOrderlist() : null)}
      //   onRefresh={() => (!loadingApi ? onWillFocus() : null)}>
      //   {!props.loading && props.ActiveList.length <= 0 ? (
      //     <Loader
      //       loader={false}
      //       title={LngCode.MSG_NO_ORDERS}
      //       style={{
      //         flex: 1,
      //         height: deviceDimensions.height / 2,
      //         justifyContent: 'flex-end',
      //       }}
      //     />
      //   ) : (
      //     <FlatList
      //       data={props.ActiveList}
      //       keyExtractor={(item, index) => `list-item-${index}`}
      //       renderItem={renderItem}
      //       // ListFooterComponent={
      //       //   loadingApi ? <ActivityIndicator size="small" /> : null
      //       // }
      //     />
      //   )}
      // </PageScrollView>
//     </Background>
//   );
// };

// const mapStateToProps = ({OrderData, UserData}) => {
//   const {loading, success, fail, ActiveList = [], last_page = 1} = OrderData;
//   const {loading2, online, fail2, DriverStatus} = UserData;

//   return {
//     loading,
//     success,
//     online,
//     loading2,
//     fail,
//     fail2,
//     ActiveList,
//     last_page,
//     DriverStatus,
//   };
// };

// export default connect(mapStateToProps, {
//   orderList,
//   changeDriverStatus,
// })(Home);

import React, {useEffect, useState, useContext} from 'react';
import {View, BackHandler, Dimensions, TouchableOpacity} from 'react-native';
import Card from '../../components/card';
import TextBox from '../../components/TextBox';
import TouchableRipple from '../../components/TouchableRipple';
import Delivery from '../home/delivery';
import Pickup from '../home/pickup';
import { outstyle } from '../home/styles';
import {Background, ItemCard, Loader, PageScrollView} from '../../components';
import {connect} from 'react-redux';
import {orderList} from '../../redux/actions/order.action';
import {changeDriverStatus} from '../../redux/actions/auth.action';
import {deviceDimensions} from '../../appResources';
import UserContext from '../../navigation/UserContext';
const Home = (props) => {
  const [menuVisible, setmenuVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('Pickup')
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

useEffect(() => {
    setLoading(true);
    onWillFocus('noti');
    if (props.DriverStatus === 'ONLINE') setDriverStatus(true);
  //  const removeNotificationListener = firebase
  //  .notifications()
  //  .onNotification(notification => {
  //       if(notification)
  //   onWillFocus('noti')
  //  })
  //  return () => {
  //  removeNotificationListener();
  //  };
}, []);
  useEffect(() => {
    props.navigation.addListener('focus', () => {
      if (props.DriverStatus === 'ONLINE') setDriverStatus(true);
      else setDriverStatus(false);
    });

    const {online, fail2, loading2, ActiveList} = props;

    if (online && statusLoader) {
      setStatusLoader(false);
      setDriverStatus(!driverStatus);
    } else  {
      setLoading(false);
      setLoadingApi(false);
      // setcount(ActiveList.length);
      console.log('success', props.success);
    }
  }, [props, props.ActiveList]);

    const onGetOrderlist = (first = false) => {
    if (props.last_page >= page && !loadingApi) {
      const payload = {
        type: `active`,
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
        // onPressAccept={orderid => onMoveTo('TrackUser', {orderid})}
        onOrderView={orderid => onMoveTo('OrderDetails1', {orderid, out: true})}
      />
    );
  };
 const title = props.loading2
    ? LngCode.WAIT_LABEL
    : driverStatus
    ? LngCode.ONLINE_LABEL
    : LngCode.OFFLINE_LABEL;

 
  
const  onGetOngoingRecords = (first = false, pageSize = 10) => {
    const {currentPage} = this.state;

    const data = {
      type: 'Pickup',
      currentPage,
      pageSize,
      first,
    };
    this.props.getAllOrders(data);
  };

  
  
// onWillFocus = () => {
//     this.setState({currentPage: 1}, () => this.onGetOngoingRecords(true, 10));
//   };
  handleLoadMore = () => {
    const { OnGoing = false, ongoingTotalPage, loading } = this.props;
    if (OnGoing && OnGoing.length < ongoingTotalPage && !loading) {
      this.setState({ currentPage: this.state.currentPage + 1 }, () =>
        this.onGetOngoingRecords(false, 10),
      );
    }
  }
  
 
 
    return (
    <Background
      onFocus={() => console.log('onfocus')}
      Backloading={props.loading}
      {...props}
      headerTitle={title}
      renderRight={false}
      switchStatus={driverStatus}
       onValueChange={onValueChange}>
        <View style={outstyle.body1}>
          <Card type="list" style={outstyle.card1}>
            <TouchableRipple
              onPress={() => setActiveTab('Pickup')}
              style={[
                outstyle.tab,
                activeTab == 'Pickup' ? outstyle.activeTab : {},
              ]}>
              <TextBox
                type="body3"
                style={[activeTab == 'Pickup' ? outstyle.activeTxt : {}]}>
             Pickup
              </TextBox>
            </TouchableRipple>

            <TouchableRipple
              onPress={() => setActiveTab('Delivery')}
              style={[
                outstyle.tab,
                activeTab == 'Delivery' ? outstyle.activeTab : {},
              ]}>
              <TextBox
                type="body3"
                style={[activeTab == 'Delivery' ? outstyle.activeTxt : {}]}>
              Delivery
              </TextBox>
            </TouchableRipple>
          </Card>
          {activeTab == 'Pickup' ? (
              <Pickup navigation={props.navigation} />
        
          ) : (
              <Delivery navigation={props.navigation} />
          )}
        </View>
      </Background>
    );
  }
// const reduxStae = ({LngCode}) => {
//   return {
//     LngCode,
//     // changeDriverStatus
//   };
// };
const mapStateToProps = ({ UserData, LngCode }) => {
  const { loading2, online, fail2, DriverStatus } = UserData;
  return {
    loading2,
    online,
    fail2,
    DriverStatus
  }
}
export default connect(mapStateToProps, {changeDriverStatus})(Home);
// const mapStateToProps = ({OrderData, LngCode}) => {
//   const {OrderDetials, OrderDetialsLoader, Products, Items} = OrderData;
//   return {
//     OrderDetials,
//     OrderDetialsLoader,
//     Products,
//     Items,
//     LngCode,
//   };
// };
// export default connect(mapStateToProps, {
//   getOrderDetail,
// })(OrderDetail);