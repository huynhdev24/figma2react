import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper header-wrapper">
                <div className="logo">
                    <img src="./assets/images/logo.png" alt="recland" />
                </div>
                <div className="header-nav">
                    <ul className="header-nav__list">
                        <li className="header-nav__item">
                            <a className="header-nav__link button" href="#">
                                Tất Cả Các Job
                            </a>
                        </li>
                        <li className="header-nav__item button-border">
                            <a className="header-nav__link button" href="#">
                                Đăng ký
                            </a>
                        </li>
                        <p className="border" />
                        <li className="header-nav__item button-border button-solid">
                            <a className="header-nav__link button" href="#">
                                Đăng Nhập
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;