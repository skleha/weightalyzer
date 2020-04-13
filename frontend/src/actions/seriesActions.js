export const RECEIVE_SERIES = 'RECEIVE_SERIES';

export const receiveRollingFive = rollingFive => ({
  type: RECEIVE_SERIES,
  rollingFive
});
