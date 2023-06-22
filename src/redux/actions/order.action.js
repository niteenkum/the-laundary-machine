import * as UserApi from '../api/order.api';
import commonActions from '../constants/action-types/common';
import orderAction from '../constants/action-types/order.actiontype';

export const orderList = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: orderAction.ORDERLIST,
  data,
  promise: () => UserApi.orderlist(data),
});
export const pickrList = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: orderAction.PICK_UP,
  data,
  promise: () => UserApi.Pickuplist(data),
});
export const deliverylist = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: orderAction.DELIVERY,
  data,
  promise: () => UserApi.Deliverylist(data),
});
export const orderStatusChange = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: orderAction.ORDER_CHANGE,
  data,
  promise: () => UserApi.onstatusChange(data),
});

export const onOrderDetails = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: orderAction.ORDER_DETAILS,
  data,
  promise: () => UserApi.onOrderDetails(data),
});


export const getAllOrders = data => ({
  type: commonActions.COMMON_API_CALL,
  subtypes:
    data.type === 'pickup' ? userActions.PICK_UP : userActions.DELIVERY,
  data,
  promise: () => UserApi.getAllOrders(data),
});
