import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import locationReducer from './locationReducer'
import defaultProductReducer from './defaultProductReducer'
import specificProductReducer from './specificProductReducer'
import userIdReducer from './userIdReducer'
import orderReducer from './orderReducer'
import similarProductsReducer from './similarProductsReducer'
import orderedProductNames from './orderedProductNames'
import getOrdersNoReducer from './getOrdersNoReducer'
import addOrderReducer from './addOrderReducer'
import deleteOrderReducer from './deleteOrderReducer'
const rootReducer = combineReducers({loginReducer, locationReducer, defaultProductReducer, specificProductReducer, userIdReducer, orderReducer, similarProductsReducer, orderedProductNames, getOrdersNoReducer, addOrderReducer, deleteOrderReducer})

export default rootReducer;
