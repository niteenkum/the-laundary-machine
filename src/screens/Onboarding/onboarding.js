import React, {useContext, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import UserContext from '../../navigation/UserContext';
import {Swiper} from '../../components';
import {styles, spacing, colors, scales, STORAGES} from '../../appResources';
import {First} from './components/first';
import {Second} from './components/second';
import {Third} from './components/third';
import {setAsyncStorage, getAsyncStorage} from '../../utils/asyncStorage';

const Onboarding = props => {
  const switcher = useContext(UserContext);

  useEffect(() => {
    setAsyncStorage(STORAGES.USER, JSON.stringify({screen: 'first'}));
  }, []);
  const onSwitch = () => {
    setAsyncStorage(STORAGES.FIRST, JSON.stringify('first')).then(res => {
      switcher.setState('AuthStack');
    });
    switcher.setState('AuthStack');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        loop={false}
        dotStyle={styles.dots}
        activeDotColor={colors.primary}
        activeDotStyle={styles.dots}
        dotColor={colors.ligthGray}
        autoplay={false}>
        <First nav={props.navigation} onSwitch={() => onSwitch()} />
        <Second nav={props.navigation} onSwitch={() => onSwitch()} />
        <Third nav={props.navigation} onSwitch={() => onSwitch()} />
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
