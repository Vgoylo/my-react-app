import React from "react";
// import s from './Dialogs.module.css';
import DialogItim from "./DialodItem/DialogItem";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  let dialogs = state.dialogsPage.dialogs
  let mapDialogElement = dialogs.map(dialog => <DialogItim name={dialog.name} id={dialog.id} />)

  return {
    dialogElement: mapDialogElement
  }
};

const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer
