import { Route, Switch } from "react-router";


/**
 * 
 * @param {*} routers: [] 
 */
export default function renderRouters(routers) {
    return <Switch>
        {
            routers.map(e => {
                let { exact, path, component: Component, routers: childRouters } = e

                let children = null
                if (childRouters) {
                    children = renderRouters(childRouters)
                }

                return <Route exact={exact} path={path} component={(prop) => <Component {...prop}>{children}</Component>} />
            })
        }
    </Switch>
}