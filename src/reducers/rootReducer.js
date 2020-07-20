import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import locationReducer from './locationReducer'
import defaultProductReducer from './defaultProductReducer'
import specificProductReducer from './specificProductReducer'
import userIdReducer from './userIdReducer'
import orderReducer from './orderReducer'
import similarProductsReducer from './similarProductsReducer'
const rootReducer = combineReducers({loginReducer, locationReducer, defaultProductReducer, specificProductReducer, userIdReducer, orderReducer, similarProductsReducer})

export default rootReducer;
