import React from "react";
import s from './Dialogs.module.css';
import MessageContainer from "./Message/MessageCotainer";

function Dialogs(props) {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {props.dialogElement}
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
