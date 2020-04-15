export const RECEIVE_SERIES = 'RECEIVE_SERIES';

const receiveSeries = series => ({
  type: RECEIVE_SERIES,
  series
});

export const storeSeries = series => dispatch => (
  dispatch(receiveSeries(series))
);
