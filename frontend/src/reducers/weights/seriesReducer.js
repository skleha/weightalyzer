import { RECEIVE_SERIES } from '../../actions/seriesActions';

const seriesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {

    case RECEIVE_SERIES:
      action.weights.data.forEach(weight => {
        newState[weight._id] = weight
      })
      return newState;

    default:
      return oldState;

  }
}

export default seriesReducer;