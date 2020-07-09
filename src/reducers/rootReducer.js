import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import locationReducer from './locationReducer'
import defaultProductReducer from './defaultProductReducer'
import specificProductReducer from './specificProductReducer'

const rootReducer = combineReducers({loginReducer, locationReducer, defaultProductReducer, specificProductReducer})

export default rootReducer;
