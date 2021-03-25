import React, { useEffect, useState } from 'react'
import CourseList from '../../components/CourseList'

export default function KhoaHoc() {
    let [state, setState] = useState({
        offline: [],
        online: [],

        loading: true
    })

    useEffect(() => {
        fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/courses')
            .then(res => res.json())
            .then((res) => {
                setState({
                    ...res,
                    loading: false
                })
            })
    }, [])
    return <CourseList online={state.online} offline={state.offline} />
}
