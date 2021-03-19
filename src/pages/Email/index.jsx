import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Email() {
    // useEffect(() => {
    //     document.getElementById('header').style.display = 'none'
    //     document.getElementById('footer').style.display = 'none'

    //     return () => {
    //         document.getElementById('header').style.display = 'block'
    //         document.getElementById('footer').style.display = 'block'
    //     }


    // }, [])

    return (
        <div className="container">
            <div className="emailform" style={{ backgroundColor: '#f4f7f6', maxWidth: '590px', margin: '20px auto', fontFamily: 'arial', lineHeight: '24px' }}>
                <div className="inner" style={{ padding: '50px' }}>
                    <div className="logo"><img src="/img/logo.svg" alt="" style={{ width: '100px', marginBottom: '10px' }} /></div>
                    <div className="content">
                        <h2>Đăng ký khóa học tại CFD.</h2>
                        <p>Chào mừng tân binh <strong>Trần Nghĩa</strong>,</p>
                        <p>
                            Bạn đã đăng ký khóa học <a href="#" target="_blank" style={{ textDecoration: 'none', color: '#00afab' }}><strong>CFD2 Căn Bản</strong></a> tại <strong>CFD</strong> thành công, chúng tôi sẽ chủ động liên hệ thông qua số điện thoại của bạn.
                        </p>
                        <Link to="/" className="btn" style={{ backgroundColor: '#00afab', borderRadius: '50px', padding: '10px 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase', fontSize: '14px', marginTop: '20px' }}>Trang chủ CFD</Link>
                    </div>
                </div>
                <div className="bottom" style={{ fontSize: '13px', background: '#ddd', padding: '30px 50px', color: '#767676' }}>
                    <p style={{ margin: '0 0 2px 0' }}>Đây là email được gửi từ hệ thống CFD.</p>
                    <p style={{ margin: '0 0 2px 0' }}>Vui lòng không trả lời trực tiếp qua email này.</p>
                    <p style={{ margin: 0 }}>Văn phòng CFD, số 11, Phan Kế Bính, Đa Kao, Quận 1, TP Hồ Chí Minh, Việt Nam.</p>
                </div>
            </div>
        </div>
    )
}
