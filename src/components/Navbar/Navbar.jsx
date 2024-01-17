import React from "react";
import s from './Navbar.module.css';
import NavbrLink from "./NavbarLink/NavbarLink";

function Navbar(props) {
  let state = props.state;

  let rootElemnt = state.sidebar.roots.map(r => <NavbrLink root={r.root} name={r.name} />)
  let dialogElement = props.dialogElement
  return (
    <nav className={s.nav}>
        {rootElemnt}
        <div className={s.friendsItem}>
           friends
          <div className={s.friendItem}>
            {dialogElement[1]}
            {dialogElement[3]}
            {dialogElement[5]}
          </div>
        </div>
    </nav>
  );
};

export default Navbar
