import axios from 'axios';
import React, {useEffect, useState} from 'react';
import TeacherItem from './TeacherItem';

function Teachers() {

  const [teachers, setTeachers] = useState(null);

  useEffect( () => {
    fetchTeacher ();
  }, [])

  async function fetchTeacher () {
      // const response = await axios.get('http://127.0.0.1:5000/teachers/');
      const response = await axios.get('/teachers/');
      setTeachers(response.data);
  }
  
  return (
    <main className="teachers">
      <div className="container">
        <div className="teachers__wrapper">
          {
            teachers && teachers.map((teacher, index) => {
              return <TeacherItem key={index} teacher={teacher}/>
            })
          }
        </div>
      </div>
    </main>
  );
}

export default Teachers;
