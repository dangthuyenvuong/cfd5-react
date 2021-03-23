import { Redirect, Route } from "react-router";
import useAuth from "./useAuth";

export function PrivateRouter(props) {
    let { login } = useAuth();
    if (login) {
        return <Route {...props} />
    }

    return <Redirect to="/" />
}