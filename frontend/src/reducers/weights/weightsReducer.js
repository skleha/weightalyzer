import { combineReducers } from 'redux';
import observedReducer from './observedReducer';
import seriesReducer from './seriesReducer';

const weightsReducer = combineReducers({
  observed: observedReducer,
  series: seriesReducer,
});

export default weightsReducer;