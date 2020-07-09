import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import locationReducer from './locationReducer'

const rootReducer = combineReducers({loginReducer, locationReducer})

export default rootReducer;
