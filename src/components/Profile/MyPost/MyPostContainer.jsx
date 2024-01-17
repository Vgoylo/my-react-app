import { addPostActionCreator } from "../../../redux/reducers/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/reducers/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

const mapStateToDispatch = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
};

const MyPostContainer = connect(mapStateToProps, mapStateToDispatch)(MyPost)

export default MyPostContainer;
