import orderAction from '../constants/action-types/order.actiontype';

export const initialState = {
  loading: false,
  loading2: false,
  success: false,
  fail: false,
  ActiveList: [],
  historyData: [],
  deliveryData: [],
  pick_upData: [],
  orderDetils: {},
  last_page: 10,
  total_jobs: '0',
  total_income: '0',
  hlast_page: 10,
  htotal_jobs: '0',
  htotal_income: '0',
  ptotal_jobs: '0',
  plast_page: 10,
  ptotal_income: '0',
  dtotal_jobs: '0',
  dlast_page: 10,
  dtotal_income: '0',
};

const OrderData = (state = initialState, action) => {
  const {data, payload, errors} = action;
  console.log('action....', action);
  switch (action.type) {
    //Order List
    case orderAction.ORDERLIST.START:
      if (data.first) return {...state, loading: true, fail: false};
      else return {...state, loading: false};
    case orderAction.ORDERLIST.SUCCESS:
      if (payload.status) {
        if (data.type === 'history') {
          if (data.first)
            return {
              ...state,
              loading: false,
              historyData: payload.data.orders.data,
              hlast_page: payload.data.orders.last_page,
              htotal_jobs: payload.total_jobs,
              htotal_income: payload.total_income,
            };
          else {
            const historyData = [
              ...state.historyData,
              ...payload.data.orders.data,
            ];
            return {...state, historyData};
          }
        } else if (data.type === 'pick_up') {
          if (data.first)
            return {
              ...state,
              loading: false,
              pick_upData: payload.data.orders.data,
              plast_page: payload.data.orders.last_page,
              ptotal_jobs: payload.total_jobs,
              ptotal_income: payload.total_income,
            };
          else {
            const pick_upData = [
              ...state.pick_upData,
              ...payload.data.orders.data,
            ];
            return {...state, pick_upData};
          }
        } else if (data.type === 'delivery') {
          if (data.first)
            return {
              ...state,
              loading: false,
              deliveryData: payload.data.orders.data,
              dlast_page: payload.data.orders.last_page,
              dtotal_jobs: payload.total_jobs,
              dtotal_income: payload.total_income,
            };
          else {
            const deliveryData = [
              ...state.deliveryData,
              ...payload.data.orders.data,
            ];
            return {...state, deliveryData};
          }
        } else if (data.type === 'active') {
          if (data.first)
            return {
              ...state,
              loading: false,
              ActiveList: payload.data.orders.data,
              last_page: payload.data.orders.last_page,
              total_jobs: payload.total_jobs,
              total_income: payload.total_income,
            };
          else {
            const ActiveList = [
              ...state.ActiveList,
              ...payload.data.orders.data,
            ];
            return {...state, ActiveList};
          }
        }
      } else return {...state, loading: false, fail: payload};
    case orderAction.ORDERLIST.FAIL:
      return {...state, fail: action.payload, loading: false};

    // //pickup
    // case orderAction.PICK_UP.START:
    //   if (data.first) return {...state, loading: true, fail: false};
    //   else return {...state, loading: false};
    // case orderAction.PICK_UP.SUCCESS:
    //   if (payload.status) {
    //     if (data.type === 'active') {
    //       if (data.first)
    //         return {
    //           ...state,
    //           loading: false,
    //           ActiveList: payload.data.orders.data,
    //           last_page: payload.data.orders.last_page,
    //           total_jobs: payload.total_jobs,
    //           total_income: payload.total_income,
    //         };
    //       else {
    //         const ActiveList = [
    //           ...state.ActiveList,
    //           ...payload.data.orders.data,
    //         ];
    //         return {...state, ActiveList};
    //       }
    //     }
    //   } else return {...state, loading: false, fail: payload};
    // case orderAction.PICK_UP.FAIL:
    //   return {...state, fail: action.payload, loading: false};
    // //delevery
    // case orderAction.DELIVERY.START:
    //   if (data.first) return {...state, loading: true, fail: false};
    //   else return {...state, loading: false};
    // case orderAction.DELIVERY.SUCCESS:
    //   if (payload.status) {
    //     if (data.type === 'active') {
    //       if (data.first)
    //         return {
    //           ...state,
    //           loading: false,
    //           ActiveList: payload.data.orders.data,
    //           last_page: payload.data.orders.last_page,
    //           total_jobs: payload.total_jobs,
    //           total_income: payload.total_income,
    //         };
    //       else {
    //         const ActiveList = [
    //           ...state.ActiveList,
    //           ...payload.data.orders.data,
    //         ];
    //         return {...state, ActiveList};
    //       }
    //     }
    //   } else return {...state, loading: false, fail: payload};
    // case orderAction.DELIVERY.FAIL:
      return {...state, fail: action.payload, loading: false};
    //Order Status
    case orderAction.ORDER_CHANGE.START:
      return {...state, loading2: true, fail: false};
    case orderAction.ORDER_CHANGE.SUCCESS:
      if (payload.status) {
        state.ActiveList.map((t, idx) => {
          if (data.order_id === t.id) {
            if (data.status === 6) state.ActiveList.splice(idx, 1);
            else state.ActiveList[idx] = {...t, status: data.status};
          }
        });
      }
      return {...state, success: action.payload, loading2: false};
    case orderAction.ORDER_CHANGE.FAIL:
      return {...state, fail: action.payload, loading2: false};

    //ORDER DETAILS
    case orderAction.ORDER_DETAILS.START:
      return {...state, loading: true, fail: false, orderDetils: {}};
    case orderAction.ORDER_DETAILS.SUCCESS:
      return {...state, loading: false, orderDetils: payload};
    case orderAction.ORDER_DETAILS.FAIL:
      return {...state, fail: errors, loading: false};

    default:
      return state;
  }
};

export default OrderData;
