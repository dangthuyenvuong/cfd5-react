import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AContext } from '../App'
export default function Header() {
    let history = useHistory()
    let { login, handleLogin } = useContext(AContext)

    function menuOpen() {
        document.body.classList.toggle('menu-is-show')
    }

    function closeMenu(e) {
        document.body.classList.remove('menu-is-show')
        document.querySelector('.loading-page').style.transform = 'scale(25)'
        e.preventDefault()
        setTimeout(() => {
            console.log(e.target.href)
            history.push(e.target.href.replace(window.location.origin, ''))
            document.querySelector('.loading-page').style.transform = 'scale(0)'

        }, 1000)
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
                                            <div className="name">Trần Lê Trọng Nghĩa</div>
                                            <div className="avatar">
                                                <img src="/img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger" >
                                    </div>
                                    <div className="sub">
                                        <a href="#">Khóa học của tôi</a>
                                        <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                        <a href="#">Đăng xuất</a>
                                    </div>
                                </div>
                            ) : (
                                <div class="not-login bg-none">
                                    <a href="#" class="btn-register" onClick={handleLogin}>Đăng nhập</a>
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
                        <NavLink exact onClick={closeMenu} to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to="/course">Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to="/project">Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to="/contact">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={menuOpen} />
        </>
    )
}
