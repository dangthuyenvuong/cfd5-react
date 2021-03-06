import React from 'react'
import useFormValidate from '../../core/useFormValidate';
import pageApi from '../../api/pageApi'
export default React.forwardRef(function Contact(props, ref) {

    let { form, inputChange, error, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: '',
    }, {
        rule: {
            name: { required: true },
            phone: { required: true, pattern: 'phone' },
            email: { required: true, pattern: 'email' },
            title: { required: true },
            content: { required: true },
        }
    })

    // let [name, setName] = useState('')
    // let [nameError, setNameError] = useState('')
    // let [phone, setPhone] = useState('')
    // let [email, setEmail] = useState('')
    // let [website, setWebsite] = useState('')
    // let [title, setTitle] = useState('')
    // let [content, setContent] = useState('')


    // let [form, setForm] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     website: '',
    //     title: '',
    //     content: ''
    // })

    // let [error, setError] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     website: '',
    //     title: '',
    //     content: ''
    // })

    // let inputRef = useRef()

    // function _btnFocus() {
    //     inputRef.current.value = 'aaaaaaa'
    // }
    // function inputChange(e) {
    //     let name = e.target.name
    //     let value = e.target.value

    //     if (name === 'phone') {
    //         if (!(value.length >= 9 && value.length <= 11)) {

    //             setError({
    //                 ...error,
    //                 phone: 'So dien thoai phai >= 9, <= 11'
    //             })
    //         } else {
    //             setError({
    //                 ...error,
    //                 phone: ''
    //             })
    //         }
    //     }


    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value
    //     })
    // }

    async function btnRegister() {

        let error = check();
        if (Object.keys(error).length === 0) {
            let res = await pageApi.contact(form)
            if (res?.success) {
                alert('B???n ???? g???i li??n h??? th??nh c??ng, ch??ng t??i s??? li??n h??? v???i b???n trong th???i gian s???m nh???t!');
            }

        }
    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">li??n h???</div> */}
                <h2 className="main-title">H???P T??C C??NG CFD</h2>
                <p className="top-des">
                    ?????ng ng???n ng???i li??n h??? v???i <strong>CFD</strong> ????? c??ng nhau t???o ra nh???ng s???n ph???m gi?? tr???, c??ng nh??
                    vi???c h???p t??c v???i c??c ?????i t??c tuy???n d???ng v?? c??ng ty trong v?? ngo??i n?????c.
                </p>
                {/* <button onClick={_btnFocus}>Focus</button> */}
                <div className="form">
                    <label>
                        <p>H??? v?? t??n<span>*</span></p>
                        <input value={form.name} onChange={inputChange} type="text" name="name" placeholder="H??? v?? t??n b???n" />
                        {error.name && <p className="error-text">{error.name}</p>}
                    </label>
                    <label>
                        <p>S??? ??i???n tho???i</p>
                        <input value={form.phone} onChange={inputChange} type="text" name="phone" placeholder="S??? ??i???n tho???i" />
                        {error.phone && <p className="error-text">{error.phone}</p>}

                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input value={form.email} onChange={inputChange} type="text" name="email" placeholder="Email c???a b???n" />
                        {error.email && <p className="error-text">{error.email}</p>}

                    </label>
                    <label>
                        <p>Website</p>
                        <input value={form.website} onChange={inputChange} type="text" name="website" placeholder="???????ng d???n website http://" />
                        {error.website && <p className="error-text">{error.website}</p>}

                    </label>
                    <label>
                        <p>Ti??u ?????<span>*</span></p>
                        <input value={form.title} onChange={inputChange} type="text" name="title" placeholder="Ti??u ????? li??n h???" />
                        {error.title && <p className="error-text">{error.title}</p>}

                    </label>
                    <label>
                        <p>N???i dung<span>*</span></p>
                        <textarea value={form.content} onChange={inputChange} name="content" id cols={30} rows={10} defaultValue={""} />
                        {error.content && <p className="error-text">{error.content}</p>}

                    </label>
                    <div className="btn main rect" onClick={btnRegister}>????ng k??</div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">????ng k?? th??nh c??ng</div>
                <p>
                    <strong>Ch??o m???ng Tr???n Ngh??a ???? tr??? th??nh th??nh vi??n m???i c???a CFD Team.</strong> <br>
                    C???m ??n b???n ???? ????ng k?? kh??a h???c t???i <strong>CFD</strong>, ch??ng t??i s??? ch??? ?????ng li??n l???c v???i b???n th??ng qua facebook
                    ho???c s??? ??i???n tho???i c???a b???n.
                </p>
            </div>
            <a href="/" class="btn main rect">v??? trang ch???</a>
        </div> */}
        </main>
    )
})

