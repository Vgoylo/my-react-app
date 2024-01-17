import React from "react";
import s from './Dialogs.module.css';
import DialogItim from "./DialodItem/DialogItem";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let dialogs = state.dialogsPage.dialogs
        let dialogElement = dialogs.map(dialog => <DialogItim name={dialog.name} id={dialog.id} />)
        return (
          <div className={s.dialogs}>
            <div className={s.dialogItems}>
              <Dialogs dialogElement={dialogElement} />
            </div>
          </div>
        );
      }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer
