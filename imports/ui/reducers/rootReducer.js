import client from '../apollo';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  apollo: client.reducer(),
});

export default rootReducer;
