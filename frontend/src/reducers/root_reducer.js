import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import weightsReducer from './weights_reducer';

const RootReducer = combineReducers({
  weights: weightsReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default RootReducer;
