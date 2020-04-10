import { combineReducers } from 'redux';
import SessionErrorsReducer from './errorsSessionReducer';

const errorsReducer = combineReducers({
  session: SessionErrorsReducer
});

export default errorsReducer;