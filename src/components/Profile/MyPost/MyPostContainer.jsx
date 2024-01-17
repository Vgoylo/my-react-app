import React from "react";
import { addPostActionCreator } from "../../../redux/reducers/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/reducers/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

function MyPostContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return <MyPost updateNewPostText={onPostChange} addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText} />
      }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;


// const mapStateToProps = (state) => {
//   return {
//     posts: state.profilePage.posts,
//     newPostText: state.profilePage.newPostText
//   }
// };

// const mapDispatychToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       let action = updateNewPostTextActionCreator(text);
//           dispatch(action);
//     },

//      addPost: () => {
//       dispatch(addPostActionCreator());
//     }
//   }
// }

// const MyPostContainer = connect(mapStateToProps, mapDispatychToProps)(MyPost)

// export default MyPostContainer;
