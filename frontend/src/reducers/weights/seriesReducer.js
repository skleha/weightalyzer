import { RECEIVE_SERIES } from '../../actions/seriesActions';

const seriesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {

    case RECEIVE_SERIES:
      action.series.forEach(point => {
        newState[point._id] = point
      })
      return newState;

    default:
      return oldState;

  }
}

export default seriesReducer;