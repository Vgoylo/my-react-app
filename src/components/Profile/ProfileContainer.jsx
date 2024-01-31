import React from "react";
import Profile from "../Profile/Profile";
import axios from 'axios';
import { setUsersProfile } from '../../redux/reducers/profile-reducer'
import { connect } from "react-redux";
import {useParams} from "react-router-dom";

const withRouter = WrappedComponent => props => {
  const params = useParams();

  return (
      <WrappedComponent
          {...props}
          params={params}
      />
  );
};
class ProfileContainer extends React.Component {

  componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId){
            userId=2;
        }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => {

      this.props.setUsersProfile(response.data)
    });
  };

  render(){
    return(
      <Profile { ...this.props} profile={this.props.profile} />
    )
}
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);
