import * as UserApi from "../api/auth.api";
import commonActions from "../constants/action-types/common";
import userActions from "../constants/action-types/login.actionTypes";

export const loginUser = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: userActions.LOGIN,
  promise: () => UserApi.loginUserApi(data)
});
export const driverDetails = data => ({
    type: userActions.DRIVER,
    data
});
export const driverStatusLocaliy = data => ({
  type: userActions.DRIVER_STSTUS,
  data
});
export const changeDriverStatus = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: userActions.ONLINE,
  data,
  promise: () => UserApi.driverStatus(data)
});
export const getNotification = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: userActions.NOTIFICATION,
  promise: () => UserApi.getNotification(data)
});
export const saveProfle = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: userActions.SAVE_PROFILE,
  promise: () => UserApi.saveProfle(data)
});
export const getMyEarning = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: userActions.EARNING,
  promise: () => UserApi.getEarning(data)
});
export const onchangepassword = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: userActions.CHANGEPASS,
  data,
  promise: () => UserApi.changepassword(data)
});
export const onLogoutUser = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: userActions.LOGOUT,
  data,
  promise: () => UserApi.onLogoutUser(data)
});
 