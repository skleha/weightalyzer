import { combineReducers } from 'redux';
import observedWeightsReducer from './observedReducer';
import seriesReducer from './seriesReducer';

const weightsReducer = combineReducers({
  observed: observedWeightsReducer,
  series: seriesReducer,
});

export default weightsReducer;