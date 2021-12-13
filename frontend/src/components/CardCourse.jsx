import React from 'react';

function CardCourse(props) {
    console.log(props.props)
    const  {id, name, username} = props.props;
    // const  {id, name, username} = props.props;

    return (
        <div class="lessons__item">
            <p class="lessons__title">{id}</p>
            <p class="lessons__disc">{name}</p>
            <p class="lessons__date">{username}</p>
            <div class="lessons__btns">
                <div class="lesson__btn btn btn-primary">Подробнее</div>
                <div class="lesson__btn btn btn-secondary">Записаться</div>
            </div>
        </div>
    );
}

export default CardCourse;
