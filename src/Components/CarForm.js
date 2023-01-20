import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost ,addCars} from "../store";

export default function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };
   
  const formSubmit =(event)=>{
    event.preventDefault()
    dispatch(addCars({name:name,cost :cost}))

  }
  return (
    <div>
      <h4>Add Car</h4>
      <form onSubmit={formSubmit}>
        <div>
          <div>
            <label>Name</label>
            <input value={name} onChange={handleChange}></input>
          </div>
          <div>
            <label>Cost</label>
            <input
              value={cost || ''}
              type="number"
              onChange={handleCostChange}
            ></input>
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
