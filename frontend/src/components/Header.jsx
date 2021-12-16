import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <div className="header__content container">
                <div className="header__left">
                    <a href="/" id="index" className="header__logo">
                        <img id="index" src="/assets/images/logo/logo_tensor-school.png" className="header__logoImage" alt="логотип школы Тензор" />
                    </a>
                </div>
                <div className="header__right">
                    <a href="tel:+73472461644" className="header__link link link__phone">+7 347 246-16-44</a>
                    <nav className="header__menu">
                        <ul className="menu__list">
                            <li className={`menu__listItem ${props.page === 'courses' ? 'active' : ''}`}>
                                <a href="/#courses" id="courses" className="menu__link link">курсы</a>
                            </li>
                            <li className={`menu__listItem ${props.page === 'teachers' ? 'active' : ''}`}>
                                <a href="/#teachers" id="teachers" className="menu__link link">преподаватели</a>
                            </li>
                            <li className={`menu__listItem ${props.page === 'about' ? 'active' : ''}`}>
                                <a href="/#about" id="about" className="menu__link link">о&nbsp;компании</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
     );
}

export default Header;
