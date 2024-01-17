import React from "react";
import s from './Dialogs.module.css';
import MessageContainer from "./Message/MessageCotainer";

function Dialogs(props) {
  debugger
  let mainDialogElements = props.dialogElement.slice(0,4)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {mainDialogElements}
      </div>
      <div className={s.messages}>
        <div className={s.message}>
            <MessageContainer />
        </div>
      </div>
    </div>
  );
}

export default Dialogs
