import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataSelector } from "../app/slices/WeatherDataSlice";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

const MyCard = () => {
  const [toggle, setToggle] = useState(true);
  const data = useSelector(DataSelector);
  console.log(toggle);
  console.log("Data", data);
  const temp = data?.main?.temp;
  const humidity = data?.main?.humidity;
  const pressure = data?.main?.pressure;
  const city = data?.name;
  const speed = data?.wind?.speed;
  const country = data?.sys?.country;

  let cel = (temp - 273.15).toFixed(1);
  let feh = (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
  //   console.log("Got",temp,humidity,pressure,city,speed,country);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi wi-day-cloudy`}></i>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
          <div className="weatherInfo">
          <Switch
            defaultChecked
            onChange={() => setToggle(!toggle)}
            color="secondary"
          />
          <div className="temperature">
            {toggle ? <span>{cel}&deg; C</span> : <span>{feh}&deg; F</span>}
          </div>

          <div className="description">
            <div className="place">
              {city ? ` ${city} ` : "Enter Valid Search "}
              {country}
            </div>
          </div>
        </div>
          </Grid>
          <Grid item xs={12} md={4} sx={{paddingLeft:0}}>
            <div className="date"> {new Date().toLocaleString()} </div>
          </Grid>
           
        </Grid>

        

        

        <div className="extra-temp">
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={3}>
              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-humidity"}></i>
                </p>
                <p className="extra-info-leftside">
                  {humidity} <br />
                  Humidity
                </p>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className="extra-info-leftside">
                  {pressure} <br />
                  Pressure
                </p>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className="extra-info-leftside">
                  {speed} <br />
                  Speed
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </article>
    </>
  );
};

export default MyCard;
