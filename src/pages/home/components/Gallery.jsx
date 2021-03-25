import React, { useEffect, useRef } from 'react'
// import $ from 'jquery';
let $ = window.$
export default function Gallery() {
    let listRef = useRef()
    useEffect(() => {
        $(listRef.current).flickity({
            contain: true,
            wrapAround: false,
            freeScroll: true,
            cellAlign: 'left',
            lazyLoad: 3,
            imagesLoaded: true,
            prevNextButtons: false
        });
    }, [])
    return (
        <section className="section-gallery">
            <div className="textbox">
                <h2 className="main-title">Chúng ta là một team</h2>
            </div>
            <div className="list" ref={listRef}>
                <img data-flickity-lazyload="img/img_team1.png" alt="" />
                <img data-flickity-lazyload="img/img_team2.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team1.png" alt="" />
                <img data-flickity-lazyload="img/img_team2.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <div className="item carousel-cell">
                    <img data-flickity-lazyload="img/img_team4.png" alt="" />
                </div>
            </div>
            <div className="controls">
                <div className="btn_ctr prev" />
                <span>Trượt qua</span>
                <div className="timeline">
                    <div className="process" />
                </div>
                <div className="btn_ctr next" />
            </div>
        </section>
    )
}
