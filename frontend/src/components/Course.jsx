import React from 'react';

function Course() {
  return (
    <main class="course container">
        <div class="course__banner">
            <img class="course__bannerImage" src="/assets/images/posts/banner.png" alt="banner" />
        </div>
        <div class="course__body">
            <div class="course__content">
                <div class="course__title">Frontend-разработка</div>
                <div class="course__description">
                    Frontend — клиентская сторона пользовательского интерфейса к программно-аппаратной части
                    сервиса.
                </div>
            </div>
            <div class="course__other">
                <div class="course__date">7 октября 18:00</div>
                <div class="course__btns">
                    <a href="#" class="btn btn-secondary btn-signUp">Записаться</a>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Course;
