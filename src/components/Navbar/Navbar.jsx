import React from "react";
import s from './Navbar.module.css';
import NavbrLink from "./NavbarLink/NavbarLink";
import DialogItim from "../Dialogs/DialodItem/DialogItem";

function Navbar(props) {
  // debugger
  let state = props.store.getState();

  let rootElemnt = state.sidebar.roots.map(r => <NavbrLink root={r.root} name={r.name} />)
  let dialogElement = state.dialogsPage.dialogs.map(dialog => <DialogItim name={dialog.name} id={dialog.id} />)

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
