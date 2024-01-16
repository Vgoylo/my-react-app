import React from "react";
import s from './Dialogs.module.css';
import DialogItim from "./DialodItem/DialogItem";
import MessageContainer from "./Message/MessageCotainer";


function Dialogs(props) {
  let state = props.store.getState();

  let dialogs = state.dialogsPage.dialogs
  let dialogElement = dialogs.map(dialog => <DialogItim name={dialog.name} id={dialog.id} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElement}
      </div>
      <div className={s.messages}>
      <div className={s.message}>
          <MessageContainer store={props.store}/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs
