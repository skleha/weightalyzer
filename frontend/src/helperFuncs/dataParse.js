export const maxAndMin = weightData => {
  let dataMin = Infinity;
  let dataMax = -Infinity;

  weightData.forEach((data) => {
    if (data.weight < dataMin) dataMin = data.weight;
    if (data.weight > dataMax) dataMax = data.weight;
  });
  
  return [dataMin, dataMax];
}


export const lastTwoWeights = (weightData) => {
  let lastWeight = null, nextToLastWeight = null;
  
  if (weightData.length > 0) {
    lastWeight = weightData[weightData.length - 1].weight;
  }

  if (weightData.length > 1) {
    nextToLastWeight = weightData[weightData.length - 1].weight;
  }

  return [lastWeight, nextToLastWeight];
};


export const dateFormatter = date => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${month}/${day}`;
};


