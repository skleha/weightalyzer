import { RECEIVE_ALL_WEIGHTS, RECEIVE_WEIGHT } from '../actions/weight_actions';

const weightsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {

    case RECEIVE_ALL_WEIGHTS:
      action.weights.data.forEach(weight => {
        newState[weight._id] = weight
      })
      return newState;

    case RECEIVE_WEIGHT:
      newState[action.weight.data._id] = action.weight.data;
      return newState;

    default:
      return oldState;

  }
}

export default weightsReducer;
