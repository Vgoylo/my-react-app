import React from "react";
import DialogItim from "../Dialogs/DialodItem/DialogItem";
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

function NavbarContainer() {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let dialogElement = state.dialogsPage.dialogs.map(dialog => <DialogItim name={dialog.name} id={dialog.id} />)

        return <Navbar state={state} roots={state.sidebar.roots} dialogElement={dialogElement}/>
      }
      }
    </StoreContext.Consumer>
  );
};

export default NavbarContainer
