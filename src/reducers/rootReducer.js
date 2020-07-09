import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import locationReducer from './locationReducer'
import defaultProductReducer from './defaultProductReducer'

const rootReducer = combineReducers({loginReducer, locationReducer, defaultProductReducer})

export default rootReducer;
