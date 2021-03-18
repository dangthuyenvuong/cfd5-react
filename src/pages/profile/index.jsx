import React from 'react'
import Coin from './components/Coin'
import MyCourse from './components/MyCourse'
import HistoryPayment from './components/HistoryPayment'
import Info from './components/Info'
import MyProject from './components/MyProject'
import { Route, Switch, useRouteMatch } from 'react-router'
import { NavLink } from 'react-router-dom'
export default function Profile() {
    let { url } = useRouteMatch()
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="/img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={url}>Thông tin tài khoản</NavLink>
                            <NavLink to={`${url}/course`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                            <NavLink to={`${url}/hisotry-payment`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Switch>

                                <Route path={`${url}/course`} component={MyCourse} />
                                <Route path={`${url}/project`} component={MyProject} />
                                <Route path={`${url}/hisotry-payment`} component={HistoryPayment} />
                                <Route path={`${url}/coin`} component={Coin} />
                                <Route exact path={url} component={Info} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
