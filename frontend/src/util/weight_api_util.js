import axios from 'axios';

export const fetchWeights = userId => {
  return axios.get('api/weights', userId);
};

export const createWeight = weightData => {
  return axios.post('api/weights', weightData);
};