import React, { useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'

export default function Demo({ num }) {
    let [count, setCount] = useState({
        num: 1
    })
    let [count2, setCount2] = useState({
        num: 1
    })

    useEffect(() => {
        console.log('useEffect')
        return () => {
            console.log('distroy useEffect')
        }
    }, [])



    console.log('render')

    function _click() {
        // count = count + 1
        count.num += 1
        setCount({ ...count })
    }
    return (
        <MainLayout>
            <div style={{ marginTop: 100, marginBottom: 100, textAlign: 'center' }}>
                {count.num} count <br />
                <button onClick={_click}>Increment</button>
            </div>
        </MainLayout>
    )
}


// State
// Là 1 giá trị bên trong component
// Được quyền thay đổi thông qua setState


// Prop
// 1 giá trị từ component cha truyền vào
// Không được quyền thay đổi
