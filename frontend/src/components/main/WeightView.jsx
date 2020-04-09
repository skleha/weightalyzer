import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { fetchWeights } from "../../util/weight_api_util";
import * as dataParse from "../../helperFuncs/dataParse";

const WeightView = props => {

  const id = useSelector((state) => state.session.user.id);
  // const reduxData = useSelector((state) => state.session.weight)
  const [weightData, setWeightData] = useState([]);
  
  useEffect(() => {
    const populateState = async () => {
      const res = await fetchWeights(id);
      const sorted = Object.values(res.data);
      sorted.sort((a, b) => a.date - b.date);
      setWeightData(sorted);
    }

    populateState();

  }, [id]);

  const [dataMin, dataMax] = dataParse.maxAndMin(weightData);


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
          <XAxis dataKey="date" tickFormatter={dataParse.dateFormatter} />
          <YAxis type="number" domain={[dataMin - 10, dataMax + 10]} />
        </LineChart>
    </div>

      <button onClick={handleEnterClick}>Enter Weight</button>

    </div>
  );
};

export default WeightView;
