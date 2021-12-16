import axios from 'axios';
import React, {useEffect, useState} from 'react';
import moment from 'moment'
import 'moment/locale/ru';
import TeacherItem from './TeacherItem';

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
        <main className="course">
            <div className="container">
                <div className="course__banner">
                    <img className="course__bannerImage" src="/assets/images/posts/banner.png" alt="banner" />
                </div>
                <div className="course__body">
                    <div className="course__content">
                        <div className="course__title">{course?.title}</div>
                        <div className="course__description" dangerouslySetInnerHTML={{__html: course?.description}}></div>
                    </div>
                    <div className="course__other">
                        <div className="course__date">{course && dateFormat(course?.date_start)}</div>
                        <div className="course__duration">{course?.duration} лекций</div>
                        <div className="course__btns">
                            <button onClick={openModal} className="btn btn-secondary btn-signUp">Записаться</button>
                        </div>
                    </div>
                </div>
                <div className="course__teacher">
                    <TeacherItem teacher={course?.teacher}/>
                </div>
            </div>
        </main>
    );
}

export default Course;
