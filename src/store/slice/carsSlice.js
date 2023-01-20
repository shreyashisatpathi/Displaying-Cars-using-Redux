import {createSlice, nanoid} from '@reduxjs/toolkit'
const carSlice = createSlice({
    name : 'car',
    initialState : { 
        searchTerm:'',
        data :[],
       },
    reducers :{
        changeSearchTerm(state,action){
         state.searchTerm = action.payload
        },
        addCars(state,action){
         state.data.push({
            name : action.payload.name,
            cost : action.payload.cost,
            id :nanoid()
         })
        },
        removeCars(state,action){
       const updated= state.data.filter((car)=>{
            return car.id!==action.payload
          })
          state.data=updated
        }
    }
})

export const {changeSearchTerm,addCars,removeCars}= carSlice.actions;
export const carsReducer = carSlice.reducer;