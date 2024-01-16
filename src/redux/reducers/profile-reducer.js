const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialeState = {
  posts: [
    { id: '1', message: 'My first post', likeCount: 21 },
    { id: '2', message: 'The second post', likeCount: 1 },
    { id: '3', message: 'Threeth post', likeCount: 6 },
    { id: '4', message: 'fourth post', likeCount: 35 },
    { id: '5', message: 'last post', likeCount: 100 }
  ],

  newPostText: ''
};

const profileReducer = (state = initialeState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: '5',
        message: state.newPostText,
        likeCount: 555
      };

      if (state.newPostText == '' || state.newPostText == null) {
        alert("Please enter > the username. Can’t be blank or empty !!!");
      } else {
        state.posts.push(newPost);
      }

      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  };
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
};

export default profileReducer;
