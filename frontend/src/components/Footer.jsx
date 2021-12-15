import React from 'react';

function Footer() {
  return (
    <footer class="footer">
        <div class="footer__content container">
            <address class="footer__contacts">
                Центр разработки в Уфе. <br />
               <b>Адрес:</b> ул. Менделеева, 134/7, БЦ «Территория 3000».<br/>
               <b>Телефон:</b> <a className='footer__link' href="tel:+7 347 246-16-44">+7 347 246-16-44</a>
            </address>
            <div class="footer__logo">
                <a href="https://tensor.ru/" target="_blank">
                    <img src="/assets/images/logo/logo_tensor.PNG" alt="логотип Тензор" />
                </a>
            </div>
            <div class="footer__socialLinks">
                <a  href="https://vk.com/tensor_company" class="footer__item" target="_blank">
                    <img src="/assets/images/icons/vk.PNG"  alt="логотип VK" />
                </a>
                <a href="https://instagram.com/tensor_company/" class="footer__item" target="_blank">
                    <img src="/assets/images/icons/inst.PNG"  alt="логотип Inst" />
                </a>
                <a href="https://t.me/joinchat/oXOz8dMubx5mZTdi" class="footer__item" target="_blank">
                    <img src="/assets/images/icons/tg.PNG"  alt="логотип TG" />
                </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
