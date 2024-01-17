import React from "react";
import { sendMessageActionCreator } from "../../../redux/reducers/dialods-reducer";
import { updateNewMessageCreator } from "../../../redux/reducers/dialods-reducer";
import Message from "./Message";
import StoreContext from "../../../StoreContext";

const MessageContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let messageChange = (text) => {
          let action = updateNewMessageCreator(text)
          store.dispatch(action);
        };
        return <Message sendMessage={sendMessage} updateMessageChange={messageChange}
          newMessageBody={state.dialogsPage.newMessageBody}
          messages={state.dialogsPage.messages} />
      }
      }
    </StoreContext.Consumer>
  );
}

export default MessageContainer;
