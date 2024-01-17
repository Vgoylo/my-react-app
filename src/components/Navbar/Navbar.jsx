import React from "react";
import s from './Navbar.module.css';
import NavbrLink from "./NavbarLink/NavbarLink";

function Navbar(props) {
  let state = props.state;

  // let rootElemnt = state.sidebar.roots.map(r => <NavbrLink root={r.root} name={r.name} />)
  let dialogElement = props.dialogElement
  return (
    <nav className={s.nav}>
        {state.sidebar.roots.map(r => <NavbrLink root={r.root} name={r.name} />)}
        <div className={s.friendsItem}>
           friends
          <div className={s.friendItem}>
            {dialogElement[1].name}
            {dialogElement[3].name}
            {dialogElement[5].name}
          </div>
        </div>
    </nav>
  );
};

export default Navbar
