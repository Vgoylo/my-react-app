import { combineReducers } from 'redux';
import { createStore } from 'redux'
import profilePage from './reducers/profile-reducer';
import dialogsPage from './reducers/dialods-reducer';
import sidebar from './reducers/sidebar-reducer';
import usersPage from './reducers/users-reducer';
import auth from './reducers/auth-reducer';

let reducers = combineReducers({
  profilePage,
  dialogsPage,
  usersPage,
  sidebar,
  auth,
});

let store = createStore(reducers, window.STATE_FROM_SERVER)
window.store= store
export default store;


