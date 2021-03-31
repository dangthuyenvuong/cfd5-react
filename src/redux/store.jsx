import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import countReducer from './reducers/countReducer'
import authReducer from './reducers/authReducer'


let reducer = combineReducers({
    auth: authReducer,
    count: countReducer
})
const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose

let thunkFake = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    next(action)
}

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunkFake)))



export default store;