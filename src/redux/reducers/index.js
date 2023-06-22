import {combineReducers,createStore} from 'redux'
import UserData from './user.reducers'
import OrderData from './order.reducers' 
export default combineReducers({
    UserData,
    OrderData
 
});