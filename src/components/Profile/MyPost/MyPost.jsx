import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

function MyPost(props) {
  debugger
  let postElement = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />);

  let newPostElement = React.createRef();

  let onaddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.posts}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText}
                    placeholder="Enter your post here" />
        </div>
        <div>
          <button onClick={onaddPost}> add </button>
        </div>
      </div>

      <div className={s.posts}>
        {postElement}
      </div>
    </div>

  );
};

export default MyPost
