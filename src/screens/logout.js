import React,{useEffect,useState, useContext} from 'react';
 
import {connect} from 'react-redux' 
import {onLogoutUser} from "../redux/actions/auth.action";
import { Loader } from '../components';
import { removeAsyncStorage, removeMultiAsyncStorage } from '../utils/asyncStorage';
import { STORAGES } from '../appResources';
import UserContext from '../navigation/UserContext';
 
const Logout = props => {
    const  switcher= useContext(UserContext)
  useEffect(()=>{
    props.onLogoutUser()
    removeAsyncStorage(STORAGES.USER).then(res=>
        switcher.setState('AuthStack')
     )
  },[])
 
 
  return (
   <Loader/>
  );
};
const mapStateToProps = ({OrderData}) => {
  const {  } = OrderData;
  console.log("sddsds",OrderData)
  return {
  
 
  };
};

export default connect(mapStateToProps, {
  onLogoutUser
})(Logout);
 
