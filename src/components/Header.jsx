import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, NavLink, } from 'react-router-dom'
import useDelayLink from '../core/useDelayLink'
// import { logout } from '../redux/actions/authAction';
import { popupLogin, logout } from '../redux/reducers/authReducer'

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
                                        <Link to="/thong-tin-ca-nhan/course">Kh??a h???c c???a t??i</Link>
                                        <Link to="/thong-tin-ca-nhan">Th??ng tin t??i kho???n</Link>
                                        <a href="#" onClick={(e) => { e.preventDefault(); dispatch(logout()) }}>????ng xu???t</a>
                                    </div>
                                </div>
                            ) : (
                                <div class="not-login bg-none">
                                    <a href="#" class="btn-register" onClick={() => dispatch(popupLogin(true))}>????ng nh???p</a>
                                    <a href="login.html" class="btn main btn-open-login">????ng k??</a>
                                </div>
                            )
                        }




                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">????ng nh???p</a>
                        <a href="#">????ng k??</a>
                    </li>
                    <li >
                        <NavLink exact onClick={delayLink} to="/">Trang ch???</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/courses">Kh??a H???c</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/project">D??? ??n</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={delayLink} to="/contact">Li??n h???</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={menuOpen} />
        </>
    )
}
