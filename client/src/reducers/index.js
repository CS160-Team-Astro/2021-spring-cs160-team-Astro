import { combineReducers } from 'redux';

import postReducer from './posts';
import userReducer from './users';


export default combineReducers({ posts:postReducer, users:userReducer });
