import { combineReducers } from 'redux';
import { navReducer } from './navReducer';
export const rootReducer = combineReducers({ 
  nav: navReducer 
});
