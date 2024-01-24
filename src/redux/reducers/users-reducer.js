const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOAL_USERS_COUNT = 'SET_TOAL_USERS_COUNT';
const SET_IS_FETCHING_LOADER = 'SET_IS_FETCHING_LOADER';

const initialeState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
};

const usrersReducer = (state = initialeState, action) => {

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
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count }

    case SET_IS_FETCHING_LOADER:
      return { ...state, isFetching: action.isFetching }

    default:
      return state;
  };
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentpageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOAL_USERS_COUNT, count: totalUsersCount });
export const setIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING_LOADER, isFetching });

export default usrersReducer;
