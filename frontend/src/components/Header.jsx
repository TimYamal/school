import React from 'react';

function Header(props) {

    function openPage(event) {
        if (event.target.id) {
            props.updatePage(event.target.id)
        }
    }

    return (
        <header class="header">
            <div class="header__content container" onClick={openPage}>
                <div id="index" class="header__logo">
                    <img id="index" src="/assets/images/logo/logo_tensor-school.png" class="header__logoImage" alt="логотип школы Тензор" />
                </div>
                <div className="header__right">
                    <a href="tel:+73472461644" className="header__link link">+7 347 246-16-44</a>
                    <nav class="header__menu">
                        <ul class="menu__list">
                            <li class="menu__listItem">
                                <a id="courses" class="menu__link link">курсы</a>
                            </li>
                            <li class="menu__listItem">
                                <a id="teachers" class="menu__link link">преподаватели</a>
                            </li>
                            <li class="menu__listItem">
                                <a id="about" class="menu__link link">о&nbsp;компании</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
     );
}

export default Header;
