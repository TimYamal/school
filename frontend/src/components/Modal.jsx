import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import React, {useEffect, useState} from 'react';

function Modal(props) {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [disabledButton, setDisabledButton] = useState(true);
    const [modalStatus, setModalStatus] = useState('openForm');

    useEffect( () => {
        validName(userName) && validEmail(userEmail) ? setDisabledButton(false) : setDisabledButton(true)
    }, [userName, userEmail])

    function setNewState() {
        props.showModal(false);
    }

    function validName (name) {
        // const regExp = new RegExp(/^[а-яА-Я \,\.\'\-]{2,100}+$/i);
        // if(regExp.test(name)) {
        if(name.length > 1) {
            return true
        } else {
            return false
        }
    }

    function validEmail (email) {
        if(email.length > 3 && email.indexOf('@')!== -1) {
            return true
        } else {
            return false
        }
    }

    function getForm(event) {
        event.preventDefault();
        const name = userName;
        const email = userEmail;
        sendUser({name: name, telephone: null, email: email, course_id: props.courseData.id})
    }

    async function sendUser (user) {
        // const response = await axios.post('http://127.0.0.1:5000/member/', user);
        const response = await axios.post('/member/', user);
        if (response.status === 200) {
            setModalStatus('done')
        } else {
            setModalStatus('error')
        }
    }

    function mount() {
        if(modalStatus==='openForm') {return (
                <form action="#" className="modal__body form-signUp">
                    <div className="form-signUp__areas">
                        <label for="name" className="form-signUp__item">
                            <p className="form-signUp__description">Имя</p>
                            <input value={userName} onChange={e => setUserName(e.target.value)} type="text" name="userName" id="name" className="form-signUp__input" placeholder="Введите Ваше имя" />
                        </label>
                        <label for="phone" className="form-signUp__item">
                            <p className="form-signUp__description">Email</p>
                            <input value={userEmail} onChange={e => setUserEmail(e.target.value)}  type="email" name="userEmail" id="email" className="form-signUp__input" placeholder="user@email.com" />
                        </label>
                    </div>
                    <div className="form-signUp__bottom">
                        {/* <button className="btn btn-secondary btn__form_singUp {}" onClick={getForm}>Записаться</button> */}
                        <button
                        className={`btn btn-secondary btn__form_singUp ${disabledButton ? 'btn-disabled' : ''}`}
                        onClick={getForm}>
                            Записаться
                        </button>
                    </div>
                </form>)
        } else if (modalStatus==='done') {
            return (
                <div className="modal__body">
                    <p>Вы успешно записались на курс</p>
                    <div className="form-signUp__bottom">
                        <button
                            className='btn btn-secondary btn__form_singUp'
                            onClick={setNewState}>
                                Ок
                        </button>
                    </div>
                </div>)
        } else {
            return (
                <div className="modal__body">
                    <p>Попробуйте позже</p>
                </div>
            )
        }
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
                {mount()}
            </div>
        </div>
    );
}

export default Modal;
