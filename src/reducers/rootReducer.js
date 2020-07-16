import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import locationReducer from './locationReducer'
import defaultProductReducer from './defaultProductReducer'
import specificProductReducer from './specificProductReducer'
import userIdReducer from './userIdReducer'
import orderReducer from './orderReducer'
const rootReducer = combineReducers({loginReducer, locationReducer, defaultProductReducer, specificProductReducer, userIdReducer, orderReducer})

export default rootReducer;
