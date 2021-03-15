import React from 'react'
import Login from '../../../components/Login'
import Course from './Course'

export default function CourseList() {
    return (
        <>
            <section className="section-courseoffline">
                <Login />

                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        <Course name="Reactjs" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Web Responsive" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Backend" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Nodejs" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="PHP" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Java" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="C#" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Python" des="" status="" image="" teacher_img="" teacher_name="" />
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        <Course name="Reactjs" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Web Responsive" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Backend" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Nodejs" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="PHP" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Java" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="C#" des="" status="" image="" teacher_img="" teacher_name="" />
                        <Course name="Python" des="" status="" image="" teacher_img="" teacher_name="" />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}
