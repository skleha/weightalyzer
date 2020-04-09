import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeights } from "../../util/weight_api_util";
import { createWeight } from "../../actions/weight_actions";
import * as dataParse from "../../helperFuncs/dataParse";

const WeightEnter = props => {

  const id = useSelector(state => state.session.user.id);
  const dispatch = useDispatch();

  const [newWeightData, setNewWeightData] = useState({
    userId: id,
    weight: "",
  });

  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    const populateState = async () => {
      const res = await fetchWeights(id);
      const sorted = Object.values(res.data);
      sorted.sort((a, b) => a.date - b.date);
      setWeightData(sorted);
    };

    populateState();
  }, [id]);

  
  const [lastWeight, nextToLastWeight] = dataParse.lastTwoWeights(weightData);


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
      <form className="weight-form" onSubmit={e => handleSubmit(e)}>

        <input
          type="text"
          value={newWeightData.weight}
          onChange={e => handleInput(e, "weight")}
          placeholder="Enter Weight"
        />
        <br />

        <button type="submit" onClick={handleSubmit}>Submit</button>
              
      </form>

      <button onClick={handleViewClick}>Go To View</button>

    </div>


  )
}

export default WeightEnter;