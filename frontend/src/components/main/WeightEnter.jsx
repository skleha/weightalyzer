import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeights, createWeight } from "../../actions/weight_actions";
import * as dataParse from "../../helperFuncs/dataParse";

const WeightEnter = props => {

  const id = useSelector(state => state.session.user.id);
  const weightData = useSelector(state => Object.values(state.weights));
  const dispatch = useDispatch();
  const [newWeightData, setNewWeightData] = useState({userId: id, weight: ""});
  
  useEffect(() => {
    const populateState = () => {
      dispatch(fetchWeights(id));
    };

    populateState();
  }, [dispatch, id]);

  const [lastWeight, nextToLastWeight] = dataParse.lastTwoWeights(weightData);
  const difference = dataParse.getDifference(lastWeight, nextToLastWeight);

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
        <div>{difference}</div>
      </div>

      <form className="weight-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={newWeightData.weight}
          onChange={(e) => handleInput(e, "weight")}
          placeholder="Enter Weight"
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