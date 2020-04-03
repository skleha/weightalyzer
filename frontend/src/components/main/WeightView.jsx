import React from "react";
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
  { name: "Page A", uv: 100 },
  { name: "Page B", uv: 200 },
  { name: "Page C", uv: 300 }
];

const WeightView = () => {
  
  
  

  return (
    <div className="something">
      <LineChart width={300} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
  
}

export default WeightView;
