import React, { useImperativeHandle, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import useAuth from '../core/useAuth'
import useFormValidate from '../core/useFormValidate'

export default React.forwardRef(function Login(prop, ref) {
    let [formError, setFormError] = useState()
    let { form, inputChange, error, check } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32,
                // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/
            }
        },
        message: {
            password: {
                pattern: 'passoword phải chứa ký tự thường, hoa, số và ký tự đặc biệt'
            }
        }
    })
    let divRef = useRef()
    let { handleLogin } = useAuth()

    useImperativeHandle(ref, () => {
        return {
            open,
            close
        }
    }, [])

    function open() {
        divRef.current.style.display = 'flex'
    }

    function close() {
        divRef.current.style.display = 'none'

    }

    async function _login() {
        let error = check()
        if (Object.keys(error).length === 0) {
            let res = await handleLogin(form)
            if (res?.error) {
                setFormError(res.error)
            } else {
                close()
            }
        }
    }

    return ReactDOM.createPortal(
        <div className="popup-form popup-login" id="popupLogin" ref={divRef} style={{ display: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    {
                        formError && <p className="error-text" style={{ textAlign: 'center', marginBottom: 20 }}>{formError}</p>
                    }
                    <label>
                        <input type="text" name="username" value={form.username} onChange={inputChange} placeholder="Email / Số điện thoại" />
                        {error.username && <p className="error-text">{error.username}</p>}
                    </label>
                    <label>
                        <input type="password" name="password" value={form.password} onChange={inputChange} placeholder="Mật khẩu" />
                        {error.password && <p className="error-text">{error.password}</p>}

                    </label>
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={_login}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="/img/google.svg" alt="" />
                            Google
                        </div>
                    </div>
                    <div className="close" >
                        <img src="/img/close-icon.png" alt="" />
                    </div>
                </div>
                {/* email form */}
                <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close" onClick={close}>
                        <img src="/img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}
)