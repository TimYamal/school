import axios from 'axios';
import React, {useEffect, useState} from 'react';
import moment from 'moment'
import 'moment/locale/ru';

function Course(props) {
    const {courseId} = props;

    const [course, setCourse] = useState(null);

    useEffect( () => {
        fetchCourse(courseId)
    }, []);

    async function fetchCourse (index) {
        // const response = await axios.get(`http://127.0.0.1:5000/course/${index}`)
        const response = await axios.get(`/course/${index}`)
        setCourse(response.data);
    }

    function openModal() {
        props.openModal(true, course);
    }

    function dateFormat(date) {
        moment.locale('ru');
        return moment(date).format('LL')
    }

    return (
        <main class="course container">
            <div class="course__banner">
                <img class="course__bannerImage" src="/assets/images/posts/banner.png" alt="banner" />
            </div>
            <div class="course__body">
                <div class="course__content">
                    <div class="course__title">{course?.title}</div>
                    <div class="course__description" dangerouslySetInnerHTML={{__html: course?.description}}></div>
                </div>
                <div class="course__other">
                    <div class="course__date">{course && dateFormat(course?.date_start)}</div>
                    <div class="course__btns">
                        <button onClick={openModal} class="btn btn-secondary btn-signUp">Записаться</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Course;
