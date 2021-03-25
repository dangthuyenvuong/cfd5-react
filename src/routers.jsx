import MainLayout from "./layout/MainLayout";
import ABCLayout from "./layout/ABCLayout";
import ChiTietKhoaHoc from "./pages/ChiTietKhoaHoc";
import Contact from "./pages/Contact";
import Email from "./pages/Email";
import Home from "./pages/Home";
import KhoaHoc from "./pages/KhoaHoc";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Team from "./pages/Team";
import ThanhToan from "./pages/ThanhToan";
import Register from "./pages/Register";
import MyCourse from "./pages/Profile/components/MyCourse";
import MyProject from "./pages/Profile/components/MyProject";
import HistoryPayment from "./pages/Profile/components/HistoryPayment";
import Coin from "./pages/Profile/components/Coin";
import Info from "./pages/Profile/components/Info";


const routers = [
    {
        path: '/email',
        exact: true,
        component: Email
    },
    {
        path: '/abc',
        component: ABCLayout,
        routers: [
            {
                path: '/team',
                component: Team
            },
        ]
    },
    {
        path: '/',
        component: MainLayout,
        routers: [

            {
                path: '/team',
                component: Team
            },
            {
                path: '/contact',
                component: Contact
            },
            {
                path: '/courses',
                component: KhoaHoc
            },
            {
                path: '/thong-tin-ca-nhan',
                component: Profile,
                auth: true,
                routers: [
                    {
                        path: '/course',
                        component: MyCourse,
                    },
                    {
                        path: '/project',
                        component: MyProject
                    },
                    {
                        path: '/payment',
                        component: HistoryPayment
                    },
                    {
                        path: '/coin',
                        component: Coin
                    },
                    {
                        path: '/',
                        component: Info,
                        exact: true
                    }
                ]
            },
            {
                path: '/project',
                component: Project
            },
            {
                path: '/payment',
                component: ThanhToan
            },
            {
                path: '/course/:slug',
                component: ChiTietKhoaHoc
            },
            {
                path: '/register/:slug',
                component: Register
            },
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                component: Page404
            }
        ]
    },


]

export default routers