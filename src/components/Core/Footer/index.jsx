import React from 'react';

const Footer = () => {
    return (
        <footer className="wrapper">
            <div className="banner-footer row">
                <div className="banner-footer__block row">
                    <div className="banner-footer__block-logo">
                        <img src="./assets/images/Content/logo-footer.svg" alt="img footer" />
                    </div>
                    <div className="banner-footer__block-content column">
                        <h3>Bạn muốn đến với Recland</h3>
                        <p>Chúng tôi sẽ giúp bạn thành công trên con đường Recer</p>
                    </div>
                </div>
                <div className="banner-footer__right">
                    <button>Đăng Ký Ngay</button>
                </div>
            </div>
            <div className="footer-form-search row">
                <div className="footer-form-search-input row">
                    <input type="text" placeholder="Enter your email address" />
                    <a href="#">
                        <img src="./assets/images/Content/btn_search.svg" alt="img footer" />
                    </a>
                </div>
                <div className="footer-form-search-right row">
                    <div className="footer-form-search-right-item row">
                        <div className="footer-form-search-right-item-block">
                            <h4>199</h4>
                        </div>
                        <p>Công việc</p>
                    </div>
                    <div className="footer-form-search-right-item row">
                        <div className="footer-form-search-right-item-block">
                            <h4>93</h4>
                        </div>
                        <p>Công ty</p>
                    </div>
                </div>
            </div>
            <div className="footer-category row">
                <ul className="footer-category-block column">
                    <img src="./assets/images/logo.png" alt="" />
                    <li className="border-bottem" />
                    <ul className="footer-category-social row">
                        <li>
                            <a href="#">
                                <img src="./assets/images/Content/Facebook.svg" alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./assets/images/Content/twitter.svg" alt="twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./assets/images/Content/linkedin.svg" alt="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="./assets/images/Content/instagram (1).svg"
                                    alt="instagram"
                                />
                            </a>
                        </li>
                    </ul>
                </ul>
                <ul className="footer-category-block">
                    <h3>Địa chỉ</h3>
                    <li>
                        <a href="#">Tòa nhà AC, 78 Duy Tân, Quận Cầu Giấy, Hà Nội</a>
                    </li>
                </ul>
                <ul className="footer-category-block">
                    <h3>Liên hệ</h3>
                    <li>
                        <a href="#"> 0369 713 819 </a>
                    </li>
                    <li>
                        <a href="#"> luat.nguyen@recland.co </a>
                    </li>
                </ul>
                <ul className="footer-category-block">
                    <h3>Menu</h3>
                    <li>
                        <a href="#"> Trang chủ </a>
                    </li>
                    <li>
                        <a href="#"> Tìm kiếm công việc </a>
                    </li>
                    <li>
                        <a href="#"> Sitemap </a>
                    </li>
                </ul>
                <ul className="footer-category-block">
                    <h3>Tài khoản của tôi</h3>
                    <li>
                        <a href="#"> Tổng quan </a>
                    </li>
                    <li>
                        <a href="#"> Kho CV </a>
                    </li>
                    <li>
                        <a href="#"> Thông tin cá nhân </a>
                    </li>
                </ul>
            </div>
            <div className="border-bottem" />
            <p className="footer-copyright">Copyright © 2022 Recland.co</p>
        </footer>
    );
};

export default Footer;