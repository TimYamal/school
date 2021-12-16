import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import "swiper/css";
// import "swiper/css/navigation"

import SwiperCore, {
    Navigation
} from 'swiper';

SwiperCore.use([Navigation]);

export default function MainSlider(props) {

    const [slide, setSlide] = useState(null);

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    async function fetchCourses () {
        // const response = await axios.get('http://127.0.0.1:5000/courses/');
        const response = await axios.get('/courses/');
        setSlide(response.data);
    }

    useEffect( () => {
        fetchCourses ();
    }, [])

    return (

        <Swiper
        className="slideItem__left mySwiper"

        navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
        }}

        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        >
            {
                slide && slide.map((element, index) => {
                    return (
                        <SwiperSlide className="slideItem__text" key={element.id.toString()} data-index={element.id}>
                            <div className="slideItem__top">
                                <a href={`/#course?id=${element.id}`} className="slideItem__title link">
                                    {element.title}
                                </a>
                            </div>
                            <div className="slideItem__description">
                                <div className="slideItem__descriptionLine" dangerouslySetInnerHTML={{__html: element.short_description}}>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            {/* <SwiperSlide className="slideItem__text">
                <div className="slideItem__title">
                    Курс по Frontend-разработке
                </div>
                <div className="slideItem__description">
                    <p className="slideItem__descriptionLine">Компания Тензор набирает студентов
                        на
                        курс по Frontend-разработке.</p>
                    <p className="slideItem__descriptionLine">На курсе Вы узнаете:</p>
                    <ul className="slideItem__descriptionLine slideItem__descriptionLine_list">
                        <li>что такое Frontend-разработка</li>
                        <li>как работать с HTML и CSS</li>
                        <li>познакомитесь с Javascript</li>
                        <li>получите опыт в командной разработке</li>
                    </ul>
                </div>
            </SwiperSlide> */}
            <div className="main__slider-arrows arrows">
                <div className="arrow arrow-prew">
                    <svg ref={navigationPrevRef} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.6264 10.3882C30.6414 8.68235 34.3723 10.8801 34.3421 14.344L34.1154 40.3238C34.0851 43.7878 30.3164 45.92 27.3316 44.1619L4.94584 30.9756C1.96107 29.2175 1.99886 24.8875 5.01386 23.1817L27.6264 10.3882Z" fill="white" stroke="#587AB0"></path>
                    </svg>
                </div>
                <div ref={navigationNextRef} className="arrow arrow-next">
                    <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9813 9.53742L43.5938 22.331C46.6088 24.0368 46.6466 28.3667 43.6619 30.1249L21.2761 43.3111C18.2913 45.0693 14.5226 42.937 14.4923 39.4731L14.2656 13.4933C14.2354 10.0293 17.9663 7.83161 20.9813 9.53742Z" stroke="#587AB0"></path>
                    </svg>
                </div>
            </div>
        </Swiper>




        // <Swiper 
        // navigation={{
        //     prevEl: navigationPrevRef.current,
        //     nextEl: navigationNextRef.current,
        // }}

        // onBeforeInit={(swiper) => {
        //     swiper.params.navigation.prevEl = navigationPrevRef.current;
        //     swiper.params.navigation.nextEl = navigationNextRef.current;
        // }}

        // className="main__slider mySwiper">
        //     <SwiperSlide className="main__slideItem">
        //         <div className="slideItem__content">
        //             <div className="slideItem__left">
        //                 <div className="slideItem__text">
        //                     <div className="slideItem__title">
        //                         Курс по Frontend-разработке
        //                     </div>
        //                     <div className="slideItem__description">
        //                         <p className="slideItem__descriptionLine">Компания Тензор набирает студентов
        //                             на
        //                             курс по Frontend-разработке.</p>
        //                         <p className="slideItem__descriptionLine">На курсе Вы узнаете:</p>
        //                         <ul className="slideItem__descriptionLine slideItem__descriptionLine_list">
        //                             <li>что такое Frontend-разработка</li>
        //                             <li>как работать с HTML и CSS</li>
        //                             <li>познакомитесь с Javascript</li>
        //                             <li>получите опыт в командной разработке</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="slideItem__right slideItem__btnsContainer">
        //                 {/* <a className="btn btn-primary link">ЗАПИСАТЬСЯ</a> */}
        //                 <a onClick={props.props} className="btn btn-primary link">ЗАПИСАТЬСЯ</a>
        //             </div>
        //         </div>
        //         <div className="slideItem__background"></div>
        //     </SwiperSlide>
        //     <SwiperSlide className="main__slideItem">
        //         <div className="slideItem__content">
        //             <div className="slideItem__left">
        //                 <div className="slideItem__text">
        //                     <div className="slideItem__title">
        //                         Курс по Frontend-разработке
        //                     </div>
        //                     <div className="slideItem__description">
        //                         <p className="slideItem__descriptionLine">Компания Тензор набирает студентов
        //                             на
        //                             курс по Frontend-разработке.</p>
        //                         <p className="slideItem__descriptionLine">На курсе Вы узнаете:</p>
        //                         <ul className="slideItem__descriptionLine slideItem__descriptionLine_list">
        //                             <li>что такое Frontend-разработка</li>
        //                             <li>как работать с HTML и CSS</li>
        //                             <li>познакомитесь с Javascript</li>
        //                             <li>получите опыт в командной разработке</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="slideItem__right slideItem__btnsContainer">
        //                 {/* <a className="btn btn-primary link">ЗАПИСАТЬСЯ</a> */}
        //                 <a onClick={props.props} className="btn btn-primary link">ЗАПИСАТЬСЯ</a>
        //             </div>
        //         </div>
        //         <div className="slideItem__background"></div>
        //     </SwiperSlide>
        //     <div className="main__slider-arrows arrows">
        //         <div className="arrow arrow-prew">
        //             <svg ref={navigationPrevRef} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M27.6264 10.3882C30.6414 8.68235 34.3723 10.8801 34.3421 14.344L34.1154 40.3238C34.0851 43.7878 30.3164 45.92 27.3316 44.1619L4.94584 30.9756C1.96107 29.2175 1.99886 24.8875 5.01386 23.1817L27.6264 10.3882Z" fill="white" stroke="#587AB0"></path>
        //             </svg>
        //         </div>
        //         <div className="arrow arrow-next">
        //             <svg ref={navigationNextRef} width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M20.9813 9.53742L43.5938 22.331C46.6088 24.0368 46.6466 28.3667 43.6619 30.1249L21.2761 43.3111C18.2913 45.0693 14.5226 42.937 14.4923 39.4731L14.2656 13.4933C14.2354 10.0293 17.9663 7.83161 20.9813 9.53742Z" fill="white" stroke="#587AB0"></path>
        //             </svg>
        //         </div>
        //     </div>
        // </Swiper>
    )
}