import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { fetchWeights } from "../../actions/weight_actions";

const WeightView = props => {

  const id = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchWeights(id));
  }, [dispatch, id]);

  const weightData = useSelector(state => {
    const sorted = Object.values(state.weights);
    return sorted.sort((a,b) => a.date - b.date)
  });

  let dataMin = Infinity;
  let dataMax = -Infinity;

  if (weightData.length) {

    weightData.forEach(data => {
      if (data.weight < dataMin) dataMin = data.weight;
      if (data.weight > dataMax) dataMax = data.weight;
    })
    
  }

  const dateFormatter = date => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${month}/${day}`;
  }

  const handleEnterClick = () => {
    props.history.push("/weightenter");
  }

  return (
   <div className="weight-view">
    <div className="weight-graph-container">
        <LineChart
          className="weight-graph"
          width={350}
          height={300}
          data={weightData}
          margin={{ top: 0, right: 30, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
          <XAxis dataKey="date" tickFormatter={dateFormatter} />
          <YAxis type="number" domain={[dataMin - 10, dataMax + 10]} />
        </LineChart>
    </div>

      <button onClick={handleEnterClick}>Enter Weight</button>

    </div>
  );
};

export default WeightView;
