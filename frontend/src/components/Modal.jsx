import axios from 'axios';
import React from 'react';
// import React, {useEffect, useState} from 'react';

function Modal(props) {

    // const [userName, setUserName] = useState(null);

    function setNewState() {
        props.showModal(false);
    }

    function getForm(event) {
        event.preventDefault();
        let name = document.querySelector('#name').value; // я это переделаю
        let email = document.querySelector('#email').value; // я это переделаю
        sendUser({name: name, telephone: 147, email: email, course_id: props.courseData.id})
    }

    async function sendUser (user) {
        console.log(user);
        console.log(props);
        // const response = await axios.post('http://127.0.0.1:5000/member/', user);
        const response = await axios.post('/member/', user);
        console.log(response);

    }

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__headline">
                    <div className="modal__title">
                        <p>Запись на курс</p>
                        <p>{props.courseData.title}</p>
                    </div>
                    <div className="modal_close btn__close" onClick={setNewState}>
                        <svg className="btn__closeCross" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
                <form action="#" className="modal__body form-signUp">
                    <div className="form-signUp__areas">
                        <label for="name" className="form-signUp__item">
                            <p className="form-signUp__description">Имя</p>
                            <input type="text" name="userName" id="name" className="form-signUp__input" placeholder="Введите Ваше имя" />
                        </label>
                        <label for="phone" className="form-signUp__item">
                            <p className="form-signUp__description">Email</p>
                            <input type="email" name="userEmail" id="email" className="form-signUp__input" placeholder="user@email.com" />
                        </label>
                    </div>
                    <div className="form-signUp__bottom">
                        <button className="btn btn-secondary btn__form_singUp" onClick={getForm}>Записаться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
