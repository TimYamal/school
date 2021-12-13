import React from 'react';

function CardCourse(props) {
    // console.log(props.curseInfo)
    // console.log(props.modal)
    // console.log(props)
    const  {date_start, description, title} = props.curseInfo;
    // const  {id, name, username} = props.props;

    function openModal() {
        // console.log(props.modalStatus)
        props.modalStatus(true, props.curseInfo);
    }

    return (
        <div class="lessons__item">
            <p class="lessons__title">{title}</p>
            <p class="lessons__disc">{description}</p>
            <p class="lessons__date">{date_start}</p>
            <div class="lessons__btns">
                <div class="lesson__btn btn btn-primary">Подробнее</div>
                <div class="lesson__btn btn btn-secondary" onClick={openModal}>Записаться</div>
            </div>
        </div>
    );
}

export default CardCourse;
