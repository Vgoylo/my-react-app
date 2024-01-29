import React from "react";
import Profile from "../Profile/Profile";

class PprofileContainer extends React.Component {

  render(){
    debugger
    return(
      <Profile { ...this.props }/>
    )
}
}

export default PprofileContainer;
