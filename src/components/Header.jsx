import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import useAppContext from '../core/useAppContext'
import useAuth from '../core/useAuth';
// import { AContext } from '../App'
import useDelayLink from '../core/useDelayLink'
import Login from './Login';
export default function Header() {
    let { login, handleLogin, popupLogin, user, logout } = useAuth();
    let delayLink = useDelayLink()

    function menuOpen() {
        document.body.classList.toggle('menu-is-show')
    }




    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={menuOpen}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {
                            login ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">{user.name}</div>
                                            <div className="avatar">
                                                <img src="/img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger" >
                                    </div>
                                    <div className="sub">
                                        <Link to="/thong-tin-ca-nhan/course">Khóa học của tôi</Link>
                                        <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                        <a href="#" onClick={(e) => { e.preventDefault(); logout() }}>Đăng xuất</a>
                                    </div>
                                </div>
                            ) : (
                                <div class="not-login bg-none">
                                    <a href="#" class="btn-register" onClick={() => popupLogin()}>Đăng nhập</a>
                                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                                </div>
                            )
                        }




                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li >
                        <NavLink exact onClick={delayLink} to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/courses">Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/project">Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/contact">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={menuOpen} />
        </>
    )
}
