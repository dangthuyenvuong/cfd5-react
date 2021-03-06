import React from 'react'
import { useSelector } from 'react-redux'
import { Prompt } from 'react-router'
import userApi from '../../../api/userApi'
// import useAuth from '../../../core/useAuth'
import useFormValidate from '../../../core/useFormValidate'
import useStateLocal from '../../../core/useStateLocal'

export default function Info() {
    let { user } = useSelector(state => state.auth)
    let { form, error, inputChange, check } = useFormValidate({
        name: user.name,
        phone: user.phone,
        fb: user.fb,
        skype: user.skype,
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            fb: {
                required: true,
                pattern: /^(?:http(s)?:\/\/)?www.facebook.com\/[\w.-]+$/i
            },
            skype: {
                required: true,
            }
        },
        options: {
            localStorage: 'profile-name'
        }
    })




    async function _save() {

        let error = check()

        if (Object.keys(error).length === 0) {
            let res = await userApi.updateInfo(form)
            if (res.data) {
                // updateInfo(res.data)
            }
        }

    }

    return (
        <>
            <Prompt message="Ban co chac chan muon roi khoi?" />
            <div className="tab1">
                <label>
                    <p>Họ và tên<span>*</span></p>
                    <input onChange={inputChange} value={form.name} name="name" type="text" placeholder="Nguyễn Văn A" />
                    {error.name && <p className="error-text">{error.name}</p>}

                </label>
                <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input onChange={inputChange} value={form.phone} name="phone" type="text" placeholder="0949******" />
                    {error.phone && <p className="error-text">{error.phone}</p>}

                </label>
                <label>
                    <p>Email<span>*</span></p>
                    <input defaultValue={user.email} disabled type="text" />
                </label>

                <label>
                    <p>Facebook<span>*</span></p>
                    <input onChange={inputChange} value={form.fb} name="fb" type="text" placeholder="Facebook url" />
                    {error.fb && <p className="error-text">{error.fb}</p>}

                </label>
                <label>
                    <p>Skype<span>*</span></p>
                    <input onChange={inputChange} value={form.skype} name="skype" type="text" placeholder="Skype url" />
                    {error.skype && <p className="error-text">{error.skype}</p>}

                </label>
                <div onClick={_save} className="btn main rect">LƯU LẠI</div>
            </div>
        </>
    )
}
