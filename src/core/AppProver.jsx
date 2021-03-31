import React from "react";
import { Provider } from 'react-redux'
import { BrowserRouter, useHistory } from "react-router-dom";
import { createStore } from "redux";
export const Context = React.createContext()
function App({ children, store }) {


    let history = useHistory()

    function delayLink(e) {
        document.body.classList.remove('menu-is-show')
        document.querySelector('.loading-page').style.transform = 'scale(25)'
        e.preventDefault()
        setTimeout(() => {
            history.push(e.target.href.replace(window.location.origin, ''))
            document.querySelector('.loading-page').style.transform = 'scale(0)'
        }, 1000)
    }

    if (!store) {
        store = createStore(() => { });
    }


    return <Provider store={store}>
        <Context.Provider value={{ delayLink }}>
            {children}
        </Context.Provider>
    </Provider>
}

const AppProvider = ({ children, store }) => {
    return <BrowserRouter>
        <App store={store}>{children}</App>
    </BrowserRouter>
}

export default AppProvider