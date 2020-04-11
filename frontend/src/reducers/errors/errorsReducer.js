import { combineReducers } from 'redux';
import SessionErrorsReducer from './sessionReducer';

const errorsReducer = combineReducers({
  session: SessionErrorsReducer
});

export default errorsReducer;