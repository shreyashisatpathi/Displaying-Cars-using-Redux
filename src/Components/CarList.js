import { useSelector, useDispatch } from "react-redux";
import { removeCars } from "../store";

export default function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.data;
  });
  const handleCarDelete = (car) => {
    dispatch(removeCars(car.id));
  };
  const renderCarList = cars.map((car) => {
    return (
      <div key={car.id}>
        <p>
          {car.name}-${car.cost}
        </p>
        <button onClick={()=>handleCarDelete(car)}>Delete</button>
      </div>
    );
  });
  return <div>{renderCarList}</div>;
}
