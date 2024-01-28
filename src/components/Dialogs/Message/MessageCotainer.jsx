import { sendMessage } from "../../../redux/reducers/dialods-reducer";
import { updateMessageChange } from "../../../redux/reducers/dialods-reducer";
import Message from "./Message";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody,
    messages: state.dialogsPage.messages
  }
};

const MessageContainer = connect(mapStateToProps, { sendMessage, updateMessageChange })(Message)

export default MessageContainer;
