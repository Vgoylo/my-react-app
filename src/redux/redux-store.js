import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialods-reducer';
import sidebarReducer from './reducers/sidebar-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;


