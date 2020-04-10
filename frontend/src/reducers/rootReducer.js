import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import sessionReducer from './sessionReducer';
import weightsReducer from './weightsReducer';

const RootReducer = combineReducers({
  weights: weightsReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default RootReducer;