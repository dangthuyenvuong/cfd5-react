import { Route, Switch } from "react-router";
import { PrivateRouter } from "./PrivateRouter";


/**
 * 
 * @param {*} routers: [] 
 */
export default function renderRouters(routers, pathParrent = '') {
    return <Switch>
        {
            routers.map(e => {
                let { exact, path, component: Component, routers: childRouters, auth } = e
                if (!path) path = ''
                path = pathParrent + '/' + path
                path = path.replace(/\/+/g, '/')
                let children = null
                if (childRouters) {
                    children = renderRouters(childRouters, path)
                }

                if (auth) {
                    return <PrivateRouter exact={exact} path={path} component={(prop) => <Component {...prop}>{children}</Component>} />
                }

                return <Route exact={exact} path={path} component={(prop) => <Component {...prop}>{children}</Component>} />
            })
        }
    </Switch>
}