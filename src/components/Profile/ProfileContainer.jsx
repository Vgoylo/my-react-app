import React from "react";
import Profile from "../Profile/Profile";
import axios from 'axios';
import { setUsersProfile } from '../../redux/reducers/profile-reducer'
import { connect } from "react-redux";
class PprofileContainer extends React.Component {

  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {

      this.props.setUsersProfile(response.data)
    });
  };

  render(){
    return(
      <Profile { ...this.props }/>
    )
}
};

const mapStateToProps = (state) => ({
  a: 13
});
export default connect(mapStateToProps, {setUsersProfile})(PprofileContainer);
