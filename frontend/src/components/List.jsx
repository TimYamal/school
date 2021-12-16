import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CardCourse from './CardCourse';

function List(props) {

    const [cards, setCards] = useState(null);

    async function fetchCourses () {
        // const response = await axios.get('http://127.0.0.1:5000/courses/');
        const response = await axios.get('/courses/');
        setCards(response.data);
    }
    
    useEffect( () => {
        fetchCourses ();
    }, [])

    return (
        <>
        <main className="lessons">
            <div className="container">
                <div className="lessons__content">
                    {
                        cards && cards.map((element, index) => {
                            return <CardCourse key={index} curseInfo={element} modalStatus={props.openModal} updatePage={props.updatePage} newCourseId={props.newCourseId}/>
                        })
                    }
                </div>
            </div>
        </main>
        </>
    );
    
}

export default List;
