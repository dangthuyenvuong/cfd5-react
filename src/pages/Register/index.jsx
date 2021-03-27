import React, { useEffect, useReducer, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import courseApi from '../../api/courseApi'
import useFormValidate from '../../core/useFormValidate'
import reducer from './reducer'

export default function Register() {
    let { slug } = useParams()
    let history = useHistory()
    let [course, setCourse] = useState()
    useEffect(async () => {
        let res = await courseApi.detail(slug)
        if (res.data) {
            setCourse(res.data)
        }
    }, [slug])


    let { form, error, inputChange, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        fb: '',
        title: '',
        content: '',
        coin: false,
        gender: 'male',
        gender2: '',
        payment: 'chuyen-khoan'

    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            email: {
                required: true,
                pattern: 'email'
            },
            fb: {
                required: true,
                pattern: /^(?:http(s)?:\/\/)?www.facebook.com\/[\w.-]+$/i
            }
        },
        message: {
            name: {
                required: 'Họ và tên không được để trống'
            },
            email: {
                required: 'Địa chỉ Email không được để trống',
                pattern: 'Địa chỉ Email phải thuộc định dạng example@gmail.com'
            }
        }
    })




    async function btnRegister() {

        let error = check()

        if (Object.keys(error).length === 0) {
            let res = await courseApi.register(form, slug)
            if (res.success) {
                history.push(`/course/${slug}`)
            }
        }

    }

    let _selectCustom = (value) => {
        // dispatch({
        //     type: 'INPUT_CHANGE',
        //     payload: {
        //         ...form,
        //         payment: value
        //     }
        // })
    }

    if (!course) return 'Loading....'

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">{course.title}</h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input value={form.name} onChange={inputChange} type="text" name="name" placeholder="Họ và tên bạn" />
                                {error.name && <p className="error-text">{error.name}</p>}
                            </label>
                            <label>
                                <p>Số điện thoại</p>
                                <input value={form.phone} onChange={inputChange} type="text" name="phone" placeholder="Số điện thoại" />
                                {error.phone && <p className="error-text">{error.phone}</p>}

                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input value={form.email} onChange={inputChange} type="text" name="email" placeholder="Email của bạn" />
                                {error.email && <p className="error-text">{error.email}</p>}

                            </label>
                            <label>
                                <p>Facebook</p>
                                <input value={form.fb} onChange={inputChange} type="text" name="fb" placeholder="Đường dẫn FB http://" />
                                {error.fb && <p className="error-text">{error.fb}</p>}

                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" name="coin" checked={form.coin} onChange={inputChange} />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Gioi tinh</p>
                                <div className="checkcontainer">

                                    <input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={inputChange} /> Female
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <div className="checkcontainer">



                                    <input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={inputChange} /> Female
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Gioi tinh</p>
                                <div className="checkcontainer">

                                    <select name="gender2" id="" value={form.gender2} onChange={inputChange} >
                                        <option value="" >---Gender---</option>
                                        <option value="male" >Male</option>
                                        <option value="female" >Female</option>
                                    </select>
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#" onClick={() => _selectCustom('chuyen-khoan')}>Chuyển khoản</a>
                                        <a href="#" onClick={_selectCustom.bind(null, 'tien-mat')}>Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect" onClick={btnRegister}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}
