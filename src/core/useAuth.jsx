import { useContext } from "react";
import { Context } from "./AppProver";

export default function useAuth() {
    let { auth, handleLogin, popupLogin, logout } = useContext(Context)
    return { login: auth.login, user: auth.user, handleLogin, popupLogin, logout }
}