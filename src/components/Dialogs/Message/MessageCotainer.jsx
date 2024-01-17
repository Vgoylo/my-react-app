import { sendMessageActionCreator } from "../../../redux/reducers/dialods-reducer";
import { updateNewMessageCreator } from "../../../redux/reducers/dialods-reducer";
import Message from "./Message";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody,
    messages: state.dialogsPage.messages
  }
};

const mapStateToDispath = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },

    updateMessageChange: (body) => {
      let action = updateNewMessageCreator(body)
      dispatch(action);
    }
  }
}
const MessageContainer = connect(mapStateToProps, mapStateToDispath)(Message)

export default MessageContainer;
