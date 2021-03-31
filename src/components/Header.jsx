import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, NavLink, } from 'react-router-dom'
import useDelayLink from '../core/useDelayLink'
import { logout, popupLogin } from '../redux/actions/authAction';
export default function Header() {


    let dispatch = useDispatch()
    let { user, login } = useSelector(state => state.auth)


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
                                        <a href="#" onClick={(e) => { e.preventDefault(); dispatch(logout()) }}>Đăng xuất</a>
                                    </div>
                                </div>
                            ) : (
                                <div class="not-login bg-none">
                                    <a href="#" class="btn-register" onClick={() => dispatch(popupLogin(true))}>Đăng nhập</a>
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
