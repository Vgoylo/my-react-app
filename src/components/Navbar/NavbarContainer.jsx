import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return{
    state: state,
    roots: state.sidebar.roots,
    dialogElement: state.dialogsPage.dialogs
  };

};

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
