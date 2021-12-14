import React from 'react';
import moment from 'moment'
import 'moment/locale/ru';

function CardCourse(props) {

    const  {date_start, description, title} = props.curseInfo;

    function openModal() {
        props.modalStatus(true, props.curseInfo);
    }

    function dateFormat(date) {
        moment.locale('ru');
        return moment(date).format('LL')
    }

    return (
        <div className="lessons__item">
            <div className="lessons__text">
                <p className="lessons__title">{title}</p>
                <p className="lessons__disc" dangerouslySetInnerHTML={{__html: description}}></p>
            </div>
            <div className="lessons__bottom">
                <p className="lessons__date">Дата начала: {dateFormat(date_start)}</p>
                <div className="lessons__btns">
                    <div className="lesson__btn btn btn-primary">Подробнее</div>
                    <div className="lesson__btn btn btn-secondary" onClick={openModal}>Записаться</div>
                </div>
            </div>
        </div>
    );
}

export default CardCourse;
