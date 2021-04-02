import { useDispatch } from "react-redux";
import userApi from "../../api/userApi";
import { AUTH_FETCH_LOGIN, AUTH_LOGIN, AUTH_LOGIN_ERROR, AUTH_LOGOUT, AUTH_POPUP } from "../type";

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
    return {
        type: AUTH_FETCH_LOGIN,
        payload: form
    }
}