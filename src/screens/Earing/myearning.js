import React,{useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Button,
  FlatList,
  ScrollView,
  Animated,
} from 'react-native';
import {
  HeaderLeft,
  ListCard,
  TextBox,
  Card,
  StickyHeader,
  Loader,
} from '../../components';
import {colors, spacing, scales, styles, SIGN} from '../../appResources';
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
} from '../../appResources/res/images.json';
import {DollerIcon} from '../../appResources/svg';
import CircleImage from '../../components/card/Circle';
import {connect} from 'react-redux';
import {getMyEarning} from '../../redux/actions/auth.action';
 

const MyEarning = props => {
 
  props.navigation.setOptions({
    headerLeft: () => (
      <HeaderLeft
        color="white"
        style={{padding:spacing(10)}}
        onPress={() => {
          props.navigation.openDrawer();
        }}
      />
    ),
  });
  useEffect(()=>{
    props.getMyEarning()
  },[])

  const renderItem = ({item}) => {
    var fullName='' 
    var {customer={},vendor_income}=item
  
    if(customer)
    fullName=`${customer.first_name} ${customer.last_name}`
    vendor_income =data && vendor_income?parseFloat(vendor_income).toFixed(2):'00.0'
    return (
      <View style={styles.card3}>
        <CircleImage  style={{backgroundColor:colors.card}} image={customer.image?customer.image:null} size={scales(44)} />
        <View style={{marginHorizontal: spacing(20), flex: 1}}>
          <TextBox type="body3">{fullName}</TextBox>
          <TextBox type="cation" color="gray">
            #{item.id}
          </TextBox>
        </View>
    <TextBox>{SIGN}{vendor_income}</TextBox>
      </View>
    );
  };
 const {earing=[],total_income}=props
  return (
    <StickyHeader
      headerHeight={scales(150)}
      headerStyle={{   borderBottomRightRadius:scales(30),
        borderBottomLeftRadius:scales(30)}}
      renderHeader={
       props.loading2? <Loader style={{backgroundColor: colors.card,flex:1}}/>:
        <View
          style={{flex: 1, backgroundColor: colors.card, alignItems: 'center'}}>
          <TextBox type="title2" style={{marginTop: spacing(20)}} color="white">
          {SIGN}{total_income}
          </TextBox>
          <TextBox type="caption" color="white">
            TOTAL EARN
          </TextBox>
        </View>
      }
      style={{flex: 1,backgroundColor:colors.white }}>
       <FlatList data={earing} renderItem={renderItem} />
      </StickyHeader>
 
  );
};

const mapStateToProps = ({UserData}) => {
  console.log("l;,ala",UserData)
  const {earing,loading2,total_income='00.0'} = UserData;

  return {earing,loading2,total_income};
};

export default connect(
  mapStateToProps,
  {
    getMyEarning,
  },
)(MyEarning);

 