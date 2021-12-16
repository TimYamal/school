import React from 'react';

function TeacherItem(props) {

    if (!props.teacher) return ''

    const  {id, description, name, surname, photo} = props.teacher;

    return (
        <div className="teachers_item">
            <img className="teacher_img" src={photo ? photo : 'https://e7.pngegg.com/pngimages/527/312/png-clipart-computer-icons-icon-design-user-web-user-icon-avatar-user.png' } alt={`user-${id}`} />
            <p className="teacher_name">{surname} {name}</p>
            <p className="teacher_course">{description}</p>
        </div>
    );
}

export default TeacherItem;