import * as WeightAPIUtil from '../util/weight_api_util';

export const RECEIVE_ALL_WEIGHTS = 'RECEIVE_ALL_WEIGHTS';
export const RECEIVE_WEIGHT = 'RECEIVE_WEIGHT';


const receiveWeights = weights => ({
  type: RECEIVE_ALL_WEIGHTS,
  weights
});

const receiveWeight = weight => ({
  type: RECEIVE_WEIGHT,
  weight
})

export const fetchWeights = userId => dispatch => (
  WeightAPIUtil.fetchWeights(userId)
    .then(weights => dispatch(receiveWeights(weights)))
);

export const createWeight = data => dispatch => (
  WeightAPIUtil.createWeight(data)
    .then(weight => dispatch(receiveWeight(weight)))
);