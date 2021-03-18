import React, { useRef, useState } from 'react'

export default React.forwardRef(function Contact(props, ref) {

    // let [name, setName] = useState('')
    // let [nameError, setNameError] = useState('')
    // let [phone, setPhone] = useState('')
    // let [email, setEmail] = useState('')
    // let [website, setWebsite] = useState('')
    // let [title, setTitle] = useState('')
    // let [content, setContent] = useState('')


    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
    })

    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
    })

    let inputRef = useRef()

    function _btnFocus() {
        inputRef.current.value = 'aaaaaaa'
    }
    function inputChange(e) {
        let name = e.target.name
        let value = e.target.value

        if (name === 'phone') {
            if (!(value.length >= 9 && value.length <= 11)) {

                setError({
                    ...error,
                    phone: 'So dien thoai phai >= 9, <= 11'
                })
            } else {
                setError({
                    ...error,
                    phone: ''
                })
            }
        }


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function btnRegister() {

        let errorObj = {}
        if (!form.name) {
            errorObj.name = 'Ho va ten khong duoc de trong'
        }

        if (!form.email) {
            errorObj.email = 'Email khong duoc de trong'
        } else if (!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i.test(form.email)) {
            errorObj.email = 'khong dung dinh dang Email'
        }

        if (!form.phone) {
            errorObj.phone = 'SO dien thoai khong duoc de trong'
        }

        if (!form.title) {
            errorObj.title = 'Tieu de khong duoc de trong'
        }

        if (form.website && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(form.website)) {
            errorObj.website = 'Website khong dung dinh dang url'
        }

        if (form.content === '') {
            errorObj.content = 'Noi dung khong duoc de trong'
        }

        setError(errorObj)


        if (Object.keys(errorObj).length === 0) {
            alert('Thanh cong')
        }

    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                {/* <button onClick={_btnFocus}>Focus</button> */}
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
                        <p>Website</p>
                        <input value={form.website} onChange={inputChange} type="text" name="website" placeholder="Đường dẫn website http://" />
                        {error.website && <p className="error-text">{error.website}</p>}

                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} onChange={inputChange} type="text" name="title" placeholder="Tiêu đề liên hệ" />
                        {error.title && <p className="error-text">{error.title}</p>}

                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea value={form.content} onChange={inputChange} name="content" id cols={30} rows={10} defaultValue={""} />
                        {error.content && <p className="error-text">{error.content}</p>}

                    </label>
                    <div className="btn main rect" onClick={btnRegister}>đăng ký</div>
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
})

