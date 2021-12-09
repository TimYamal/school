import React from 'react';

function Footer() {
  return (
    <footer class="footer">
        <div class="footer__content container">
            <address class="footer__contacts">
                Центр разработки в Уфе. Адрес:
                ул. Менделеева, 134/7, БЦ «Территория 3000».
                Телефон: +7 347 246-16-44
            </address>
            <div class="footer__logo">
                <a href="#">
                    <img src="/assets/images/logo/logo_tensor.PNG" alt="логотип Тензор" />
                </a>
            </div>
            <div class="footer__socialLinks">
                <a href="#" class="footer__item">
                    <img src="/assets/images/icons/vk.PNG" alt="логотип VK" />
                </a>
                <a href="#" class="footer__item">
                    <img src="/assets/images/icons/inst.PNG" alt="логотип Inst" />
                </a>
                <a href="#" class="footer__item">
                    <img src="/assets/images/icons/tg.PNG" alt="логотип TG" />
                </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
