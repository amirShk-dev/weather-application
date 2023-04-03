import {createSlice} from "@reduxjs/toolkit"

const WeatherDataSlice = createSlice({
    name:"weather",
    initialState:{},
    reducers:{
        addData:(state,action)=> action.payload,
    }
})

export const {addData} = WeatherDataSlice.actions;

export const DataSelector = (state) => state?.weather;

export default WeatherDataSlice.reducer;