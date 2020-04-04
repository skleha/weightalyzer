import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { fetchWeights } from "../../actions/weight_actions";

const data = [
  { name: "Page A", uv: 140 },
  { name: "Page B", uv: 145 },
  { name: "Page C", uv: 150 }
];

const WeightView = () => {
  
  const id = useSelector(state => state.session.user.id);
  const weightData = useSelector(state => Object.values(state.weights));
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchWeights(id));
  }, [dispatch, id]); // Don't know why I need dispatch and id in dependency array

  const dateFormatter = date => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${month}/${day}`;
  }

  return (
    <div className="weight-graph-container">
      <LineChart
        className="weight-graph"
        width={330}
        height={300}
        data={weightData}
        margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        <XAxis dataKey="date" tickFormatter={dateFormatter} />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default WeightView;
