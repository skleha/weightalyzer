import { combineReducers } from 'redux';
import observedWeightsReducer from './observedReducer';

const weightsReducer = combineReducers({
  observed: observedWeightsReducer,
  
});

export default weightsReducer;