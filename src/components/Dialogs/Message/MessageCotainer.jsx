import React from "react";
import { sendMessageActionCreator } from "../../../redux/reducers/dialods-reducer";
import { updateNewMessageCreator } from "../../../redux/reducers/dialods-reducer";
import Message from "./Message";

const MessageContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let messageChange = (body) => {
    let action = updateNewMessageCreator(body)
    props.store.dispatch(action);
  };

  return (
    <Message sendMessage={sendMessage} updateMessageChange={messageChange}
             newMessageBody={state.dialogsPage.newMessageBody}
             messages={state.dialogsPage.messages} />
  );
}

export default MessageContainer;
