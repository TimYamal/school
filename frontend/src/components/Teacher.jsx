import axios from 'axios';
import React, {useEffect, useState} from 'react';

function Teacher() {

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
    <main class="teachers container">
      <div class="teachers__wrapper">
        {
          teachers && teachers.map((teacher) => {
            return (
              <div class="teachers_item">
                <img class="teacher_img" src={teacher.photo ? teacher.photo : 'https://e7.pngegg.com/pngimages/527/312/png-clipart-computer-icons-icon-design-user-web-user-icon-avatar-user.png' } alt={teacher.name} />
                <p class="teacher_name">{teacher.surname} {teacher.name} {teacher.patronymic}</p>
                <p class="teacher_course">{teacher.description}</p>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}

export default Teacher;
