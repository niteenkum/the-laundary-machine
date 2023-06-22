import authAction from '../constants/action-types/login.actionTypes';
import { setAsyncStorage } from '../../utils/asyncStorage';
import { STORAGES } from '../../appResources';

export const initialState = {
  loading: false,
  loading2 :false,
  total_income:"0",
  success: false,
  online: {},
  Driver: {}, 
  noti:[],
  earing:[],
  fail2:false,
  fail:false,
  DriverStatus:'OFFLINE'
 };

const UserData = (state = initialState, action) => {
  const {data, payload,errors} = action;
 
  switch (action.type) {
    //ADD LOCAL DATA 
    case authAction.DRIVER:
      return {...state, Driver: data };
      case authAction.DRIVER_STSTUS:
        return {...state,DriverStatus : data };
   //LOGIN
    case authAction.LOGIN.START:
      return {...state, loading: true,fail:false,success:false };
    case authAction.LOGIN.SUCCESS:
      return {...state, loading: false, success: action.payload};
    case authAction.LOGIN.FAIL:
      return {...state, fail:errors, loading: false};
   //DRIVER UPDATE
    case authAction.SAVE_PROFILE.START:
      return {...state, loading: true,success:false  };
    case authAction.SAVE_PROFILE.SUCCESS:
      console.log(payload,'payload.....................')
      return {...state, loading: false, success:payload};
    case authAction.SAVE_PROFILE.FAIL:
      return {...state, fail:errors, loading: false};
   //ONLINE
    case authAction.ONLINE.START:
      return {...state, loading2: true,fail2:false };
    case authAction.ONLINE.SUCCESS:
      const type= data.online?'ONLINE':'OFFLINE'
      if(payload.status)
      setAsyncStorage(STORAGES.STATUS,type)
      return {...state, loading2: false,DriverStatus:type,Driver:payload.data, online: action.payload};
    case authAction.ONLINE.FAIL:
      return {...state, fail2: errors, loading2: false};
   //CHANGE PASSWORD
    case authAction.CHANGEPASS.START:
      return {...state, loading: true,success:false,fail:false };
    case authAction.CHANGEPASS.SUCCESS:
      return {...state, loading: false, success: action.payload};
    case authAction.CHANGEPASS.FAIL:
      if(errors && errors.response)
      return {...state, fail: errors.response.data, loading: false};
      return {...state, fail:!state.fail, loading: false};
   //MY EARING
    case authAction.EARNING.START:
      return {...state, loading2: true,fail2:false };
    case authAction.EARNING.SUCCESS:
      if(payload.status)
       return {...state, loading2: false,total_income:payload.total_income, earing: payload.data.data};
     else 
     return {...state, loading2: false, fail2: payload };
    case authAction.EARNING.FAIL:
      return {...state, fail2: errors, loading2: false};
   //NOTIFICATION
    case authAction.NOTIFICATION.START:
      return {...state, loading2: true,fail2:false };
    case authAction.NOTIFICATION.SUCCESS:
      if(payload.status)
       return {...state, loading2: false, noti: payload.data};
      else 
      return {...state, fail2: action.payload, loading2: false};
    case authAction.NOTIFICATION.FAIL:
      return {...state, fail2: errors, loading2: false};

     default:
      return state;
  }
};

export default UserData;
