import apiService from '../services';
import {
  orderlistApi,
  statusChange,
  orderdetils,
  pickuplist,
  deliverylist
} from '../constants/endpoint-constants';

export const orderlist = data =>
  apiService.get(
    `${orderlistApi}?type=${data.type}&page_size=${data.page_size}&page=${data.page}`,
  );
  export const Pickuplist = data =>
  apiService.post(
    `${pickuplist}?type=${data.type}&page_size=${data.page_size}&page=${data.page}`,
    );
    export const Deliverylist = data =>
     apiService.get(
    `${deliverylist}?type=${data.type}&page_size=${data.page_size}&page=${data.page}`,
  );
export const onstatusChange = data => apiService.post(statusChange, data);
export const onOrderDetails = data => apiService.post(orderdetils, data);
