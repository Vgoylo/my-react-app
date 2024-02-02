import React from "react";
import style from './Header.module.css';
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={style.header}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00XR4pfCiyFIBOMxfkTfwjZDaRGaHU6xAkQ&usqp=CAU' />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login :  <NavLink to={'/login'}> login </NavLink>}
      </div>
    </header>
  );
};

export default Header
