import React from 'react';

function TeacherItem(props) {

    const  {id, description, name, surname, photo} = props.teacher;

    return (
        <div class="teachers_item">
            <img class="teacher_img" src={photo ? photo : 'https://e7.pngegg.com/pngimages/527/312/png-clipart-computer-icons-icon-design-user-web-user-icon-avatar-user.png' } alt={`user-${id}`} />
            <p class="teacher_name">{surname} {name}</p>
            <p class="teacher_course">{description}</p>
        </div>
    );
}

export default TeacherItem;