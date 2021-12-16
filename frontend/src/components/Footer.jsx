import React from 'react';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__content container">
            <address className="footer__contacts">
                <p>Центр разработки в Уфе.</p>
                <p><b>Адрес:</b> ул. Менделеева, 134/7,<br className="br__mobile" /> БЦ «Территория 3000».</p>
                <p><b>Телефон:</b> <a className='footer__link' href="tel:+7 347 246-16-44">+7 347 246-16-44</a></p>
            </address>
            <div className="footer__logo">
                <a href="https://tensor.ru/" target="_blank">
                    <img src="/assets/images/logo/logo_tensor.PNG" alt="логотип Тензор" />
                </a>
            </div>
            <div className="footer__socialLinks">
                <a  href="https://vk.com/tensor_company" className="footer__item" target="_blank">
                    <img src="/assets/images/icons/vkblue.png" className='social__img' alt="логотип VK" />
                    <img src="/assets/images/icons/vkorange.png" className='social__img_hover' alt="логотип VK" />
                </a>
                <a href="https://instagram.com/tensor_company/" className="footer__item" target="_blank">
                    <img src="/assets/images/icons/instblue.png" className='social__img' alt="логотип Inst" />
                    <img src="/assets/images/icons/instorange.png" className='social__img_hover' alt="логотип Inst" />
                </a>
                <a href="https://t.me/joinchat/oXOz8dMubx5mZTdi" className="footer__item" target="_blank">
                    <img src="/assets/images/icons/tgblue.png" className='social__img' alt="логотип TG" />
                    <img src="/assets/images/icons/tgorange.png" className='social__img_hover' alt="логотип TG" />
                </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
