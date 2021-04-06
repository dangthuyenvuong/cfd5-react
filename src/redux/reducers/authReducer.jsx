import createSlice from "../../core/createSlice";
// import { AUTH_POPUP, AUTH_LOGIN, AUTH_LOGOUT, AUTH_LOGIN_ERROR } from "../type";

let initialState = JSON.parse(localStorage.getItem('auth')) || {
    login: false,
    user: null,
    loginError: null,
    popupOpen: false
}

let { reducer, type, action } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        popupLogin(state, action) {
            state.popupOpen = action.payload;
        },
        login(state, action) {
            state.login = true
            state.user = action.payload

        },
        logout(state, action) {
            return {
                ...state,
                login: false,
                user: null
            }
        },
        loginError(state, action) {
            return {
                ...state,
                loginError: action.payload
            }
        },
        fetchLogin(state, action) {
            return state;
        }
    }
})

export default reducer;

export const AUTH = type;

export const { popupLogin, login, logout, loginError, fetchLogin } = action;

// export default function authReducer(state = initialState, action) {
//     switch (action.type) {
//         case AUTH_POPUP:
//             return {
//                 ...state,
//                 popupOpen: action.payload
//             }
//         case AUTH_LOGIN:

//             return {
//                 ...state,
//                 login: true,
//                 user: action.payload
//             }
//         case AUTH_LOGOUT:
//             return {
//                 ...state,
//                 login: false,
//                 user: null
//             }
//         case AUTH_LOGIN_ERROR:

//             return {
//                 ...state,
//                 loginError: action.payload
//             }
//         default:
//             return state;
//     }

// }
