import { configureStore } from "@reduxjs/toolkit";
import {
  changeSearchTerm,
  addCars,
  removeCars,
  carsReducer,
} from "./slice/carsSlice";
import { changeCost, changeName, formReducer } from "./slice/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});
export { store, changeCost, changeName, changeSearchTerm, addCars, removeCars };
