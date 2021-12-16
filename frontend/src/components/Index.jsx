import axios from 'axios';
import React, {useEffect, useState} from 'react';
import MainSlider from './MainSlider';

function Index(props) {

    const [course, setCourse] = useState(null);

    useEffect( () => {
        if (course) {
            props.openModal(true, course);
        }
    }, [course])

    function getOpenSlide() {
        fetchCourse(document.querySelector('.swiper-slide-active').dataset.index);
    }

    async function fetchCourse (index) {
        // const response = await axios.get(`http://127.0.0.1:5000/course/${index}`)
        const response = await axios.get(`/course/${index}`)
        setCourse(response.data);
    }

    return (
        <main className="main">
            <section className="main__slider container">
                <div className="main__slideItem">
                    <div className="slideItem__content">
                        <MainSlider />
                        <div className="slideItem__right slideItem__btnsContainer">
                            <a onClick={getOpenSlide} className="btn btn-primary link">ЗАПИСАТЬСЯ</a>
                        </div>
                    </div>
                    <div className="slideItem__background"></div>
                </div>
            </section>
        </main>
    );
}

export default Index;
