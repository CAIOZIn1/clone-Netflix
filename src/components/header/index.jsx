import React from "react";
import style from './Header.module.scss'
import logo from '../../assets/img/logo.png'

export default ({black}) => {
    return (
        <header className={black ? style.headerBlack : ''}>
            <div className={style.headerLogo}>
                <a href="/">
                    <img src={logo}/>
                </a>
            </div>

            <div className={style.headerUser}>
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="foto user" />
                </a>
            </div>
        </header>
    );
}