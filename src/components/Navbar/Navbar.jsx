import React from "react";
import s from './Navbar.module.css';
import NavbrLink from "./NavbarLink/NavbarLink";
import DialogItim from "../Dialogs/DialodItem/DialogItem";

function Navbar(props) {

  let rootNavbar = props.roots.map(r => <NavbrLink root={r.root} name={r.name} />)
  let dialogElement = props.dialogElement.map(dialog => <DialogItim name={dialog.name} id={dialog.id} />)
  let navbarDialogElements = dialogElement.slice(0,3)

  return (
    <nav className={s.nav}>
        {rootNavbar}
        <div className={s.friendsItem}>
           my the best friends
          <div className={s.friendItem}>
            {navbarDialogElements}
          </div>
        </div>
    </nav>
  );
};

export default Navbar
