import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./slices/WeatherDataSlice"
const store = configureStore({
    reducer: {
      weather:WeatherReducer,
    },
});

export default store;
 