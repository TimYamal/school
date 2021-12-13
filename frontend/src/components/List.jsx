import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CardCourse from './CardCourse';

function List() {

    const [cards, setCards] = useState(null);

    async function fetchCourses () {
    
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
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
                    {/* <CardCourse props={cards[0]}/> */}
                    {
    
                        cards && cards.map((element) => {
                            return <CardCourse props={element}/>
                            // <CardCourse props={element}/>
                        })

                        // cards.forEach(element => {
                        //     <CardCourse props={element}/>
                        // })
                    }
                </div>
            </div>
        </main>
        </>
    );
    
}

export default List;
