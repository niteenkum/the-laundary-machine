import apiService from "../services";
import {
  login,
  onlineStatus,
  notification,
  profileUpdate,
  earn,
  logout 
  } from "../constants/endpoint-constants";

export const loginUserApi = data => apiService.post(`${login}`, data);
export const driverStatus = data => apiService.post(onlineStatus, data);
export const getNotification = data => apiService.get(notification);
export const saveProfle = data => apiService.post(profileUpdate,data);
export const getEarning = data => apiService.get(earn);
export const changepassword = data => apiService.post(changePass,data);

export const onLogoutUser = data => apiService.get(logout );
// 
 