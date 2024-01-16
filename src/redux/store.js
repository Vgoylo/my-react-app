import dialogsReducer from "./reducers/dialods-reducer";
import profileReducer from "./reducers/profile-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'My first post', likeCount: 21 },
        { id: '2', message: 'The second post', likeCount: 1 },
        { id: '3', message: 'Threeth post', likeCount: 6 },
        { id: '4', message: 'fourth post', likeCount: 35 },
        { id: '5', message: 'last post', likeCount: 100 }
      ],

      newPostText: ''
    },

    dialogsPage: {
      messages: [
        { id: '1', message: 'Hi Dima' },
        { id: '2', message: 'How are you Andrey' },
        { id: '3', message: 'Hello Sveta' },
        { id: '4', message: 'Hello Sasha' },
        { id: '5', message: 'Hello Valera' },
        { id: '6', message: 'Hello Viktor' }
      ],

      newMessageBody: '',

      dialogs: [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Andrey' },
        { id: '3', name: 'Sveta' },
        { id: '4', name: 'Sasha' },
        { id: '5', name: 'Valera' },
        { id: '6', name: 'Viktor' }
      ],
    },

    sidebar: {
      roots: [
        { root: '/profile', name: 'profile' },
        { root: '/dialogs', name: 'messages' },
        { root: '/news', name: 'news' },
        { root: '/music', name: 'music' },
        { root: '/settings', name: 'settings' }
      ],
    }

  },

  _callSubscriber() {
  },

  getState() {
    return this._state;
  },

  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
