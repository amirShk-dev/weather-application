import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, DataSelector } from "../app/slices/WeatherDataSlice";
import MyCard from "./MyCard";
import "./style.css";
import Grid from "@mui/material/Grid"
const Weather = () => {
  const [searchValue, setSearchValue] = useState("");
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const dispatch = useDispatch();

  const getWeatherInfo =  () => {
    let url 
    if(searchValue){
       url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=58d83a3f8f4e3c4ab6c549a3c3beae36`; 
    }else if(latitude){
       url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=58d83a3f8f4e3c4ab6c549a3c3beae36`; 
       
    }

    Axios.get(url)
        .then((res)=>{
            // console.log("Response",res?.data);
          dispatch(addData(res?.data)); 
        })
        .catch((err)=>{
          console.log(err);
        }) 
  };       

  function success(position) { 
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    getWeatherInfo(); 
  }

 console.log(latitude,longitude);
  function error() {
    console.log("user did not allow location access..");
  } 

  useEffect(() => {
    navigator.geolocation.watchPosition(success, error);
    getWeatherInfo();
  }, []);
  useEffect(() => {
    getWeatherInfo();
  }, [latitude]);


  return (
    <>
    <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
        <Grid item xs={8} sx={{marginBottom:2}} >
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
        </Grid>
        <MyCard />
   
    </Grid>
      {/* <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>  */}
    </>
  );
};

export default Weather;
