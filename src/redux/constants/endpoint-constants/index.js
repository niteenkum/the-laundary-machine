import { Environment } from "../../../config/environment";

const { BASE_URL } = Environment;

//auth
export const login = BASE_URL+'/driver/login';
export const onlineStatus = BASE_URL+'/driver/online';
export const notification = BASE_URL+'/getnotification' ;
export const profileUpdate = BASE_URL+'/driver/profile/update' ;
export const earn = BASE_URL+'/driver/payments' ;
export const changePass = BASE_URL+'/changepassword' ;
export const logout = BASE_URL+'/logout' ;


// orders
 export const orderlistApi = BASE_URL+'/driver/orders';
export const statusChange = BASE_URL+'/driver/orders/status';
export const orderdetils = BASE_URL + '/driver/orders/show';
export const pickuplist = BASE_URL + '/driver/orders/pick_up';
export const deliverylist = BASE_URL + '/driver/orders/delivery';
