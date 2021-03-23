import React, { useEffect, useState } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
export let Context = React.createContext()

function App({ children }) {
    let [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || {
        login: false,
        user: null
    })
    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth))
    }, [auth])

    function handleLogin(form) {
        setAuth({
            login: true,
            user: {
                name: 'Đặng Thuyền Vương'
            }
        })
    }

    function logout() {
        setAuth({
            login: false,
            user: null
        })
    }

    function popupLogin(flag = true) {
        document.getElementById('popupLogin').style.display = flag ? 'flex' : 'none'
    }

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

    return <Context.Provider value={{ auth, handleLogin, delayLink, popupLogin, logout }}>
        {children}
    </Context.Provider>
}

const AppProvider = ({ children }) => {
    return <BrowserRouter>
        <App>{children}</App>
    </BrowserRouter>
}

export default AppProvider