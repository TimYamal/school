import React from 'react';

function CardCourse(props) {

    const  {date_start, description, title} = props.curseInfo;

    function openModal() {
        props.modalStatus(true, props.curseInfo);
    }

    return (
        <div className="lessons__item">
            <p className="lessons__title">{title}</p>
            <p className="lessons__disc" dangerouslySetInnerHTML={{__html: description}}></p>
            <p className="lessons__date">{date_start}</p>
            <div className="lessons__btns">
                <div className="lesson__btn btn btn-primary">Подробнее</div>
                <div className="lesson__btn btn btn-secondary" onClick={openModal}>Записаться</div>
            </div>
        </div>
    );
}

export default CardCourse;
