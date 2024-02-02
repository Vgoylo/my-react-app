const SET_USER_DATE = 'SET_USER_DATE';

const initialeState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false
}

const authReduser = (state = initialeState, action) => {

  switch (action.type) {
    case SET_USER_DATE: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    }
    default:
      return state;
  };
};

export const setAuthUserData = (email, userId, login) => ({ type: SET_USER_DATE,
                                                            data: { email, userId, login } });

export default authReduser;
