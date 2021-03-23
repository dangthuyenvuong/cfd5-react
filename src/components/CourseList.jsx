import React from 'react'
import Course from './Course'

export default function CourseList() {
    return (
        <>
            <section className="section-courseoffline">

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
                        <Course name="Reactjs" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Web Responsive" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Backend" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Nodejs" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="PHP" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Java" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="C#" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Python" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />

                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        <Course name="Reactjs" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Web Responsive" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Backend" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Nodejs" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="PHP" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Java" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="C#" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />
                        <Course name="Python" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores, ullam ex voluptatem, necessitatibus," status="" image="/img/img7.png" teacher_img="https://www.cfdtraining.vn/uploads/thumbnails/vuong-cfd-thubnail-1-48x48.jpg" teacher_name="Vương Đặng" />

                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}
