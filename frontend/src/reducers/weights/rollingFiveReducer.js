import { RECEIVE_ALL_WEIGHTS } from '../../actions/weight_actions';

const rollingFiveReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {

    case RECEIVE_ALL_WEIGHTS:
      action.weights.data.forEach(weight => {
        newState[weight._id] = weight
      })
      return newState;

    default:
      return oldState;

  }
}

export default rollingFiveReducer;