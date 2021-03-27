import React, { useEffect, useState } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import userApi from "../api/userApi";
export let Context = React.createContext()

function App({ children }) {
    let [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || {
        login: false,
        user: null
    })
    useEffect(() => {

        if (auth.login) {
            localStorage.setItem('auth', JSON.stringify(auth))
            if (auth.user.token) {
                localStorage.setItem('token', JSON.stringify(auth.user.token))
            }
        } else {
            localStorage.removeItem('auth')
            localStorage.removeItem('token')
        }
    }, [auth])

    async function handleLogin(form) {
        let res = await userApi.login(form)
        if (res.error) {
            return res
        } else {
            setAuth({
                login: true,
                user: res.data
            })
        }
    }

    function updateInfo(data) {
        setAuth({
            ...auth,
            user: data
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

    return <Context.Provider value={{ auth, handleLogin, delayLink, popupLogin, logout, updateInfo }}>
        {children}
    </Context.Provider>
}

const AppProvider = ({ children }) => {
    return <BrowserRouter>
        <App>{children}</App>
    </BrowserRouter>
}

export default AppProvider