import countReducer from './countReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    auth: authReducer,
    count: countReducer
})

export default reducers