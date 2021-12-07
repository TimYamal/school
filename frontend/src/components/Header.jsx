import React from 'react';

function Header() {
  return (
    <header class="header">
        <div class="header__content container">
            <a href="#" class="header__logo">
                <img src="/static/images/logo/logo_tensor-school.png" class="header__logoImage" alt="логотип школы Тензор" />
            </a>
            <nav class="header__menu">
                <ul class="menu__list">
                    <li class="menu__listItem">
                        <a href="#" class="menu__link link">уроки</a>
                    </li>
                    <li class="menu__listItem">
                        <a href="#" class="menu__link link">записаться</a>
                    </li>
                    <li class="menu__listItem">
                        <a href="#" class="menu__link link">вход</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;
