
let initialeState = {
  roots: [
    { root: '/profile', name: 'profile' },
    { root: '/dialogs', name: 'messages' },
    { root: '/news', name: 'news' },
    { root: '/music', name: 'music' },
    { root: '/settings', name: 'settings' }
  ],
};

const sidebarReducer = (state = initialeState, action) => {

  return state;
};

export default sidebarReducer;
