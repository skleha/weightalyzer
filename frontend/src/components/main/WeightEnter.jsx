import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeights, createWeight } from "../../actions/weight_actions";

const WeightEnter = props => {

  const id = useSelector(state => state.session.user.id);
  
  const [weightData, setWeightData] = useState({
    userId: id,
    weight: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeights(id));
  }, [dispatch, id]); // Don't know why I need dispatch and id in array

  const handleInput = (e, field) => {
    let data = e.target.value;

    setWeightData(currentState => ({
      ...currentState,
      [field]: data
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
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