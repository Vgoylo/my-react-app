import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from './MyPost/MyPostContainer';
// import StoreContext from "../../StoreContext";


function Profile() {
  return (
    <div>
      <ProfileInfo />
      {/* <StoreContext.Provider value={props.store}> */}
        <MyPostContainer />
      {/* </StoreContext.Provider> */}
    </div>
  );
};

export default Profile
