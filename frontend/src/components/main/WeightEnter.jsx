import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchWeights, createWeight } from "../../actions/weight_actions";

const WeightEnter = props => {

  const userId = useSelector(state => state.session.user.id);
  const [weightData, setWeightData] = useState({
    userId,
    weight: "",
    date: ""
  });
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWeights(userId);
  }, []);

  const handleInput = (e, field) => {
    let data = e.target.value;

    setWeightData(currentState => ({
      ...currentState,
      [field]: data
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await setWeightData(currentState => ({
      ...currentState,
      date: new Date()
    }))
    
    dispatch(createWeight(weightData));
  };



  return (
    <div>
      <form className="weight-form" onSubmit={e => handleSubmit(e)}>

        <input
          type="text"
          value={weightData.weight}
          onChange={e => handleInput(e, "weight")}
          placeholder="Enter Weight"
        />
        <br />

        <input type="submit" value="Submit" />
      
      </form>
    </div>


  )


}



export default WeightEnter;