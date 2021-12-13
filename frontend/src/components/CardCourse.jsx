import React from 'react';

function CardCourse(props) {
    console.log(props.props)
    const  {date_start, description, title} = props.props;
    // const  {id, name, username} = props.props;

    return (
        <div class="lessons__item">
            <p class="lessons__title">{title}</p>
            <p class="lessons__disc">{description}</p>
            <p class="lessons__date">{date_start}</p>
            <div class="lessons__btns">
                <div class="lesson__btn btn btn-primary">Подробнее</div>
                <div class="lesson__btn btn btn-secondary">Записаться</div>
            </div>
        </div>
    );
}

export default CardCourse;
