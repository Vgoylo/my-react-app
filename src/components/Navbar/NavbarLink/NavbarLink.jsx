import React from "react";
import s from './../Navbar.module.css';


const NavbrLink = (props) => {
  return (
    <div className={s.item}>
      <a className={s.link}href={props.root}>{props.name}</a>
    </div>
  )
};

export default NavbrLink
