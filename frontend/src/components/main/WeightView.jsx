import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { fetchWeights } from "../../actions/weight_actions";

const WeightView = props => {
  
  const id = useSelector(state => state.session.user.id);
  const weightData = useSelector(state => {
    const sorted = Object.values(state.weights);
    return sorted.sort((a,b) => a.date - b.date)
  });
  
  // const low = weightData[0].weight;
  // const high = weightData[weightData.length - 1].weight;

  const dispatch = useDispatch();

  
  useEffect(() => {

    const populateState = async () => {
      await dispatch(fetchWeights(id));  
    }

    populateState();
    
  }, []);

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
          <YAxis />
        </LineChart>
    </div>

      <button onClick={handleEnterClick}>Enter Weight</button>

    </div>
  );
};

export default WeightView;
