import React, { useEffect, useState } from 'react'
import CourseList from '../../components/CourseList'
import useStateSession from '../../core/useStateSession'

export default function KhoaHoc() {
    let [state, setState] = useStateSession({
        offline: [],
        online: [],
        api: true,
        loading: true
    }, 'course-list')

    useEffect(() => {
        if (state.api) {
            fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/courses')
                .then(res => res.json())
                .then((res) => {
                    setState({
                        ...res,
                        loading: false
                    })
                })
        }

    }, [])
    return <CourseList online={state.online} offline={state.offline} />
}
