export const maxAndMin = weightData => {
  let dataMin = Infinity;
  let dataMax = -Infinity;

  weightData.forEach((data) => {
    if (data.weight < dataMin) dataMin = data.weight;
    if (data.weight > dataMax) dataMax = data.weight;
  });
  
  return [dataMin, dataMax];
}


export const lastTwoWeights = weightData => {
  let lastWeight = null, nextToLastWeight = null;
  
  if (weightData.length > 0) {
    lastWeight = weightData[weightData.length - 1].weight;
  }

  if (weightData.length > 1) {
    nextToLastWeight = weightData[weightData.length - 2].weight;
  }

  return [lastWeight, nextToLastWeight];
};


export const lastTwoDates = weightData => {
  let lastDate = null,
    nextToLastDate = null;

  if (weightData.length > 0) {
    lastDate = weightData[weightData.length - 1].date;
  }

  if (weightData.length > 1) {
    nextToLastDate = weightData[weightData.length - 2].date;
  }

  return [lastDate, nextToLastDate].map(date => dateFormatter(date));
};


export const getDifference = (weightOne, weightTwo) => {
  if (weightOne && weightTwo) {    
    const difference = weightOne - weightTwo;
    const signChar = (difference > 0) ? "+" : "";    
    return `${signChar}${difference.toFixed(1)}`
  } else {
    return "-";
  }
}

export const getRollingFive = weightData => {
  if (weightData.length < 5) return null;

  const dataSet = [];
  const lastFive = [];

  for (let i = 0; i < weightData.length; i++) {
    let newPoint = {};
    newPoint._id = weightData[i]._id;
    newPoint.date = weightData[i].date;
    lastFive.push(weightData[i].weight);
    let newWeight;

    if (lastFive.length < 5) {
      newPoint.weight = null;
    } else if (lastFive.length === 5) {
      newWeight = (lastFive.reduce((acc, val) => acc + val)) / 5;
      newPoint.weight = newWeight;
    } else {
      lastFive.shift();
      newWeight = (lastFive.reduce((acc, val) => acc + val)) / 5;
      newPoint.weight = newWeight;      
    }

    dataSet.push(newPoint);
  }

  return dataSet;
}


export const dateFormatter = date => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${month}/${day}`;
};
