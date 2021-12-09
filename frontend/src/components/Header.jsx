import React from 'react';

function Header() {
  return (
    <header class="header">
        <div class="header__content container">
            <a href="#" class="header__logo">
                <img src="/assets/images/logo/logo_tensor-school.png" class="header__logoImage" alt="логотип школы Тензор" />
            </a>
            <nav class="header__menu">
                <ul class="menu__list">
                    <li class="menu__listItem">
                        <a href="#" class="menu__link link">курсы</a>
                    </li>
                    <li class="menu__listItem">
                        <a href="#" class="menu__link link">преподаватели</a>
                    </li>
                    <li class="menu__listItem">
                        <a href="#" class="menu__link link">о&nbsp;компании</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;
