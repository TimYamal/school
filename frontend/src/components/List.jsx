import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CardCourse from './CardCourse';

function List(props) {

    const [cards, setCards] = useState(null);

    async function fetchCourses () {
    
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const response = await axios.get('http://127.0.0.1:5000/courses/');
        // const response = await axios.get('/courses/');
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
                            return <CardCourse curseInfo={element} modalStatus={props.openModal} />
                        })
                    }
                </div>
            </div>
        </main>
        </>
    );
    
}

export default List;
