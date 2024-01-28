import { addPost } from "../../../redux/reducers/profile-reducer";
import { updateNewPostText } from "../../../redux/reducers/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

const MyPostContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost
})(MyPost)

export default MyPostContainer;
