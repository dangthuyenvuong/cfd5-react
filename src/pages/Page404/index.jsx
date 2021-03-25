import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'





export default function Page404() {
    let [count, setCount] = useState(0)
    useEffect(() => {
        document.getElementById('header').style.display = 'none'
        document.getElementById('footer').style.display = 'none'
        // console.log('aaaa 1', count)
        return () => {
            document.getElementById('header').style.display = 'block'
            document.getElementById('footer').style.display = 'block'
        }
    }, [])

    return (
        <main className="notfound" id="main">
            <div className="container">
                <section>
                    {count} <br />
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <h2 className="main-title">404</h2>
                    <p>Không tìm thấy trang</p>
                    <Link to="/" className="btn main round">Trang chủ</Link>
                </section>
            </div>
        </main>
    )
}
