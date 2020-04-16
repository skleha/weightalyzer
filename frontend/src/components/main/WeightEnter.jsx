import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeights, createWeight } from "../../actions/weight_actions";
import * as dataParse from "../../helperFuncs/dataParse";

const WeightEnter = props => {

  const id = useSelector(state => state.session.user.id);
  const weightData = useSelector(state => Object.values(state.weights.observed));
  const [newWeightData, setNewWeightData] = useState({userId: id, weight: ""});
  const [lastWeight, nextToLastWeight] = dataParse.getLastTwoWeights(weightData);
  const currDifference = dataParse.getDifference(lastWeight, nextToLastWeight);
  const lastDate = dataParse.getLastDate(weightData);
  const rollingFive = dataParse.getRollingFive(weightData);
  const lastFivePoint = rollingFive ? dataParse.getLastWeight(rollingFive) : null;
  const rollingFiveDiff = dataParse.getDifference(lastWeight, lastFivePoint);
  const dispatch = useDispatch();
  

  useEffect(() => {
    
    const populateStore = () => {
      dispatch(fetchWeights(id));
    }
    
    populateStore();

  }, [dispatch, id]);


  const handleInput = (e, field) => {
    let data = e.target.value;

    setNewWeightData(currentState => ({
      ...currentState,
      [field]: data
    }));
  };


  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(createWeight(newWeightData));
    props.history.push("/weightview");
  };


  const handleViewClick = () => {
    props.history.push("/weightview");
  }


  return (
    <div className="weight-view">
      <div className="weight-enter-grid">
        <div>Last Weight</div>
        <div>Date</div>
        <div>{lastWeight}</div>
        <div>{lastDate}</div>

        <div></div>
        <div></div>

        <div>Prev Weight</div>
        <div>Change (lbs)</div>
        <div>{nextToLastWeight}</div>
        <div>{currDifference}</div>

        <div></div>
        <div></div>
        
        <div>Last 5 Avg.</div>
        <div>Diff (lbs)</div>
        <div>{lastFivePoint}</div>
        <div>{rollingFiveDiff}</div>
        
      </div>

      <form className="weight-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={newWeightData.weight}
          onChange={(e) => handleInput(e, "weight")}
          placeholder="Enter New Weight"
        />
        <br />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <button onClick={handleViewClick}>Go To View</button>
    </div>
  );
}

export default WeightEnter;