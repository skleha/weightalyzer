import { combineReducers } from 'redux';
import errorsReducer from './errors/errorsReducer';
import sessionReducer from './session/sessionReducer';
import weightsReducer from './weights/weightsReducer';

const RootReducer = combineReducers({
  weights: weightsReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default RootReducer;