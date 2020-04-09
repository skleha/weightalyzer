
export const maxAndMin = weightData => {
  
  let dataMin = Infinity;
  let dataMax = -Infinity;

  console.log(weightData);
  weightData.forEach((data) => {
    if (data.weight < dataMin) dataMin = data.weight;
    if (data.weight > dataMax) dataMax = data.weight;
  });
  
  return [dataMin, dataMax];
}

export const dateFormatter = date => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${month}/${day}`;
};


