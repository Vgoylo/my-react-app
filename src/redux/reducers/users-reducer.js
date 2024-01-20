const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

const initialeState = {
  users: [
    // { id: 1, followed: true, fullName: 'Dimach', status: 'I am a big boss', location: {city: 'minsk', country: 'Belarus'} },
    // { id: 2, followed: false, fullName: 'Sasha', status: 'I am a big boss too', location: {city: 'minsk', country: 'Belarus'} },
    // { id: 3, followed: true, fullName: 'Matvey', status: 'I am a big boss too', location: {city: 'minsk', country: 'Belarus'} },
    // { id: 4, followed: false, fullName: 'Dimach', status: 'I am a big boss too', location: {city: 'minsk', country: 'Belarus'} },

  ]
};

const usrersReducer = (state = initialeState, action) => {
debugger
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user, followed: true
            }
          }
          return user;
        })
      }
    }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user, followed: false
            }
          }
          return user;
        })
      }

    case SET_USERS:
      return {
        ...state, users: action.users
      }

    default:
      return state;
  };
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usrersReducer;
