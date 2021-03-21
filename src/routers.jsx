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
                path: '/abc/team',
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
                path: '/course',
                component: KhoaHoc
            },
            {
                path: '/thong-tin-ca-nhan',
                component: Profile
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