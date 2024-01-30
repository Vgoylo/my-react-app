const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'ADD_USER';

const initialeState = {
  posts: [
    { id: '1', message: 'My first post', likeCount: 21 },
    { id: '2', message: 'The second post', likeCount: 1 },
    { id: '3', message: 'Threeth post', likeCount: 6 },
    { id: '4', message: 'fourth post', likeCount: 35 },
    { id: '5', message: 'last post', likeCount: 100 }
  ],

  profile: null,
  newPostText: ''
};

const profileReducer = (state = initialeState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: '5',
        message: state.newPostText,
        likeCount: 555
      };

      if (state.newPostText === '' || state.newPostText === null) {
        alert("Please enter the message. Can’t be blank or empty !!!");
      } else {
        return {
          ...state,
          newPostText: '',
          posts: [...state.posts, newPost]
        };
      }
      return state;
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  };
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
};
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
