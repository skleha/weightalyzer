import React from "react";
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
  { name: "Page A", uv: 140 },
  { name: "Page B", uv: 145 },
  { name: "Page C", uv: 150 }
];

const WeightView = () => {

  



  return (
    <div className="weight-graph-container">
      <LineChart
        className="weight-graph"
        width={330}
        height={300}
        data={data}
        margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
  
}

export default WeightView;
