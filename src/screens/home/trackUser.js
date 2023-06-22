import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Switch,
  Image,
  Linking,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {
  PhoneIcon,
  DirectionIcon,
  ClockIcon,
  MeterIcon,
  CartIcon,
} from '../../appResources/svg';
import {HeaderLeft, TextBox, InHeader, Loader, Card} from '../../components';
import {
  svgHeight,
  colors,
  spacing,
  scales,
  GOOGLE_APIS,
  STORAGES,
  styles,
} from '../../appResources';
import {changeDriverStatus} from '../../redux/actions/auth.action';
import {onOrderDetails} from '../../redux/actions/order.action';
import CircleImage from '../../components/card/Circle';
const isIOS = Platform.OS == 'ios';
const delta = {latitudeDelta: 0.1, longitudeDelta: 0.1};
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
  ProviderPropType,
} from 'react-native-maps';
import UserContext from '../../navigation/UserContext';
import {connect} from 'react-redux';

import {getFirstLastUpperCase} from '../../utils/functions';
const initial = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const TrackUser = props => {
  var map = null;
  const {LngCode, setLng} = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [statusLoader, setStatusLoader] = useState(false);
  const [roots, setRoots] = useState([]);
  const [state, setState] = useState(false);
  const [startUser, setStartUser] = useState(null);
  const [endUser, setEndUser] = useState(null);

  useEffect(() => {
    if (props.DriverStatus === 'ONLINE') setState(true);
    watchPosition();
  }, []);

  useEffect(() => {
    const {orderDetils} = props;
    if (startUser && !roots.length) {
      console.log('startUser', startUser, endUser);
      if (orderDetils && orderDetils.data && !endUser) {
        const {delivery_address} = orderDetils.data;
        var region = {
          latitude: parseFloat(delivery_address?.lat),
          longitude: parseFloat(delivery_address?.lng),
          ...delta,
        };

        setEndUser(region);
      }
    }
  }, [startUser]);

  useEffect(() => {
    if (endUser && !roots) fetchPaygainData();
    if (map) map.fitToElements(true);
  }, [endUser]);

  useEffect(() => {
    if (map && roots) map.fitToElements(true);
  }, [roots]);

  useEffect(() => {
    const {online, fail2, loading2, orderDetils = {}} = props;
    props.navigation.addListener('focus', () => {
      if (props.DriverStatus === 'ONLINE') setState(true);
      else setState(false);
    });

    if (online && statusLoader) {
      setStatusLoader(false);
      setState(!state);
    }
  }, [props, props.orderDetils, props.loading]);

  const onMoveTo = (screen, params = {}) => {
    props.navigation.navigate(screen, params);
  };
  const openMap = location => {
    const loc = `daddr=${location}`;
    if (isIOS) Linking.openURL(`http://maps.apple.com/maps?${loc}`);
    else Linking.openURL(`http://maps.google.com/maps?${loc}`);
  };
  const fetchPaygainData = () => {
    console.log('ssaccsdvdsvdsv', startUser, endUser);
    if (startUser && startUser.latitude) {
      const url =
        GOOGLE_APIS.DIRECTION +
        `?origin=${startUser.latitude},${startUser.longitude}&destination=${endUser.latitude},${endUser.longitude}&key=${GOOGLE_APIS.DIRECTION_KEY}&mode=walking`;

      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson) setRoots(responseJson.routes[0].legs[0].steps);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  const onCalling = phone => {
    Linking.openURL(`tel:${phone}`);
  };
  const watchPosition = async () => {
    console.log('watchPosition');
    await Geolocation.getCurrentPosition(
      position => {
        var region2 = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: delta.latitudeDelta,
          longitudeDelta: delta.longitudeDelta,
        };
        if (!startUser) setStartUser(region2);
      },
      error => onMoveTo('ErrorLocation'),
      {enableHighAccuracy: false, timeout: 4000},
    );
  };

  const renderPolyLine = t => {
    return (
      <Polyline
        coordinates={[
          {latitude: t.start_location.lat, longitude: t.start_location.lng}, // optional
          {latitude: t.end_location.lat, longitude: t.end_location.lng}, // optional
        ]}
        strokeColor="#000"
        fillColor="#000"
        strokeWidth={2}
      />
    );
  };
  const onValueChange = st => {
    if (!statusLoader) {
      setStatusLoader(true);
      if (st) props.changeDriverStatus({online: 1});
      else props.changeDriverStatus({online: 0});
    }
  };
  const {data} = props.orderDetils;

  const title = props.loading2
    ? LngCode.WAIT_LABEL
    : state
    ? LngCode.ONLINE_LABEL
    : LngCode.OFFLINE_LABEL;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <InHeader
        goBack={true}
        nav={props.navigation}
        title={title}
        onValueChange={onValueChange}
        status={state}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: colors.ligthGray,
        }}>
        <MapView
          ref={ref => {
            map = ref;
          }}
          //mapType="satellite"
          style={{position: 'absolute', top: 0, height: '90%', width: '100%'}}
          initialRegion={initial}
          region={endUser ? endUser : initial}>
          {roots ? roots.map(t => renderPolyLine(t)) : null}
          {endUser && data && data.customer ? (
            <Marker
              title={data.customer.first_name}
              pinColor={colors.primary}
              coordinate={endUser}
            />
          ) : null}
          {startUser ? (
            <Marker coordinate={startUser} pinColor={colors.red} />
          ) : null}
        </MapView>

        <DirectionIcon
          onPress={() => openMap(`${endUser?.latitude},${endUser?.longitude}`)}
          style={[
            styles.icon3,
            {
              alignSelf: 'flex-end',
              margin: spacing(20),
              backgroundColor: colors.card2,
            },
          ]}
          size={scales(50)}
        />
        <View
          style={{
            width: '100%',
            height: scales(100),
            paddingHorizontal: spacing(20),
            elevation: 3,
            backgroundColor: colors.white,
            borderTopStartRadius: spacing(30),
            borderTopEndRadius: spacing(30),
          }}>
          <View
            style={{
              alignSelf: 'center',
              marginTop: spacing(15),
              width: spacing(50),
              height: 5,
              backgroundColor: colors.ligthGray,
            }}
          />

          {data && data.customer ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CircleImage
                size={scales(60)}
                image={data.customer.image}
                style={{borderWidth: 0.1}}
              />
              <View style={{marginLeft: spacing(20), flex: 1}}>
                <TextBox type="body3" numberOfLines={1}>
                  {' '}
                  {getFirstLastUpperCase(
                    `${data.customer.first_name} ${data.customer.last_name}`,
                  )}
                </TextBox>
                <TextBox
                  type="caption"
                  style={{opacity: 0.4, marginLeft: scales(5)}}>
                  #{data.id}
                </TextBox>
              </View>
              <PhoneIcon
                onPress={() => onCalling(data.phone)}
                style={styles.icon3}
                size={scales(50)}
              />
            </View>
          ) : (
            <Loader />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = ({UserData, OrderData}) => {
  const {loading2, online, fail2, DriverStatus} = UserData;
  const {orderDetils} = OrderData;
  console.log('sddsds', UserData);
  return {
    online,
    loading2,
    fail2,
    orderDetils,
    DriverStatus,
  };
};

export default connect(mapStateToProps, {
  onOrderDetails,
  changeDriverStatus,
})(TrackUser);

{
  /* <Marker.Animated
          icon={<SenderIcon/>}
            ref={marker => {
            
            }}
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
      > 
      </Marker.Animated> */
}
{
  /* <Marker.Animated
          icon={<SenderIcon/>}
            ref={marker => {
            
            }}
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
      > 
      </Marker.Animated> */
}
