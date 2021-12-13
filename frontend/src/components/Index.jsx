import React from 'react';
import MainSlider from './MainSlider';

function Index(props) {

    function setNewState() {
        props.props(true);
    }

    return (
        <main class="main">
            <section class="main__slider container">
                <div class="main__slideItem">
                    <div class="slideItem__content">
                        <MainSlider
                        props={setNewState}
                        />
                        <div class="slideItem__right slideItem__btnsContainer">
                            <a onClick={setNewState} class="btn btn-primary link">ЗАПИСАТЬСЯ</a>
                        </div>
                    </div>
                    <div class="slideItem__background"></div>
                </div>
            </section>
        </main>
    );
}

export default Index;
