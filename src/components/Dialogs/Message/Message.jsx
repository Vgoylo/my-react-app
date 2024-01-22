import React from "react";
import s from '../Dialogs.module.css'
const Message = (props) => {

  let messageElement = props.messages.map(message => <li>{message.message}</li>);
  let newMessageBody = props.newMessageBody

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (event) => {
    let body = event.target.value;
    props.updateMessageChange(body);
  };

  return (
    <div>
      <div>
        {messageElement}
      </div>
      <div >
        <textarea onChange={onMessageChange} value={newMessageBody}
          placeholder="Enter your message here" />
      </div>
      <div>
        <button className={s.button} onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Message
