import { call, put } from 'redux-saga/effects'
import userApi from '../../api/userApi'
import { login, loginError, popupLogin } from '../actions/authAction'

export function* fetchLogin(action) {
    let res = yield call(userApi.login, action.payload)
    if (res.error) {
        yield put(loginError(res.error))
    } else {
        localStorage.setItem('auth', JSON.stringify({
            login: true,
            user: res.data
        }))
        localStorage.setItem('token', JSON.stringify(res.data.token))
        yield put(login(res.data))
        yield put(popupLogin(false))
    }
}

export function* logout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('token')
}