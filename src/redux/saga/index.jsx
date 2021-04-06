import { take, takeLatest } from 'redux-saga/effects'
import { COUNT_INCREMENT } from '../type'
import { AUTH } from '../reducers/authReducer'
import { fetchLogin, logout } from './authSaga'

export default function* mySaga() {

    yield takeLatest(AUTH.logout, logout)
    yield takeLatest(AUTH.fetchLogin, fetchLogin)
    // yield takeLatest(, fetchLogin)
    // yield take(COUNT_INCREMENT)


}