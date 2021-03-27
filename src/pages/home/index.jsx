import Banner from "./components/Banner";
import CourseList from "../../components/CourseList";
import Different from "./components/Different";
import Terminal from "./components/Terminal";
import Gallery from "./components/Gallery";
import Action from "./components/Action";
import MainLayout from "../../layout/MainLayout";
import { useEffect, useState } from "react";
import courseApi from "../../api/courseApi";
import useStateSession from "../../core/useStateSession";



export default function Home() {
    let [state, setState] = useStateSession({
        gallery: [],
        offline: [],
        online: [],
        review: [],
        api: true,
        loading: true
    }, 'home')

    useEffect(async () => {
        if (state.api) {
            let res = await courseApi.home()
            setState({
                ...res,
                loading: false,
                api: false
            })
        }

    }, [])

    if (state.loading) return 'Loading....'

    return (
        <>
            <main className="homepage" id="main">
                <Banner />
                <CourseList online={state.online} offline={state.offline} />
                <Different />
                <Terminal review={state.review} />
                <Gallery images={state.gallery} />
                <Action />
            </main>

            {/* popup video homepage */}
            <div className="popup-video" style={{ display: 'none' }}>
                <div className="wrap">
                    <div className="video-src" />
                </div>
                <div className="close" />
            </div>
            <div className="popup-form popup-login" style={{ display: 'none' }}>
                <div className="wrap">
                    <h2 className="title">Đăng ký</h2>
                    <div className="btn btn-icon rect white btn-google">
                        <img src="/img/google.svg" alt="" />
                        Google
                    </div>
                    <p className="policy">
                        Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
                    </p>
                    <div className="close">
                        <img src="/img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
