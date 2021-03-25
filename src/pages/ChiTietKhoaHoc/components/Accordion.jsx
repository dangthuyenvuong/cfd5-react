import React, { useEffect, useRef } from 'react'
// import $ from 'jquery'
let $ = window.$


export default function Accordion({ num, title, content, active, handleAnccordion }) {
    let ref = useRef()
    useEffect(() => {
        if (active) {
            $(ref.current).slideDown(200)
        } else {
            $(ref.current).slideUp(200)
        }
    }, [active])
    // useEffect(() => {
    //     $(ref.current).on('click', function () {
    //         $(this).next().slideToggle()
    //     })
    // }, [])
    // function _onClick(e) {
    //     let $parent = $(e.currentTarget).closest('.accordion')
    //     $parent.toggleClass('active')
    //     $(e.currentTarget).next().slideToggle(200)
    //     if ($parent.hasClass('active')) {
    //         $('.accordion.active').not($parent).removeClass('active')
    //             .find('.content').slideUp(200)
    //     }

    // }

    return (
        <div className={`accordion ${active ? 'active' : ''}`}>
            <div className="accordion__title" onClick={handleAnccordion}>
                <div className="date">Ngày {num}</div>
                <h3>{title}</h3>
            </div>
            <div className="content" ref={ref}>
                {content}
            </div>
        </div>
    )
}
