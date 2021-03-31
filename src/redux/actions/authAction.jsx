import { useDispatch } from "react-redux";
import userApi from "../../api/userApi";
import { AUTH_LOGIN, AUTH_LOGIN_ERROR, AUTH_LOGOUT, AUTH_POPUP } from "../type";

export function popupLogin(flag) {
    return {
        type: AUTH_POPUP,
        payload: flag
    }
}

export function login(user) {
    return {
        type: AUTH_LOGIN,
        payload: user
    }
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    }
}

export function loginError(error) {
    return {
        type: AUTH_LOGIN_ERROR,
        payload: error
    }
}

export function fetchLogin(form) {
    return async (dispatch, getState) => {
        let res = await userApi.login(form)
        if (res.error) {
            dispatch(loginError(res.error))
        } else {

            dispatch(login(res.data))

            dispatch(popupLogin(false))
        }
    }
}