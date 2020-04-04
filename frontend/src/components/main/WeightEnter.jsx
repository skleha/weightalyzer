import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createWeight } from "../../actions/weight_actions";

const WeightEnter = props => {

  const id = useSelector(state => state.session.user.id);
  const dispatch = useDispatch();

  const [weightData, setWeightData] = useState({
    userId: id,
    weight: "",
  });

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

  const handleViewClick = () => {
    props.history.push("/weightview");
  }

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
      
        <button onClick={handleViewClick}>Go To View</button>
      </form>

      

    </div>


  )
}

export default WeightEnter;