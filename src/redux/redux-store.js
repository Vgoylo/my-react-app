import { combineReducers } from 'redux';
import { createStore } from 'redux'
import profilePage from './reducers/profile-reducer';
import dialogsPage from './reducers/dialods-reducer';
import sidebar from './reducers/sidebar-reducer';

let reducers = combineReducers({
  profilePage,
  dialogsPage,
  sidebar
});

let store = createStore(reducers, window.STATE_FROM_SERVER)

export default store;


