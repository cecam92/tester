/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import dotenv from "dotenv";

// search for every .env file in the project
dotenv.config();

const GOOGLE_MAPS_API_KEY = "AIzaSyC-fQVkm2xukA79CIzMFoTWK_4sl8rGFqc";
const Main = () => {
  const [state, setState] = useState({
    latitude: 3.451647,
    longitude: -76.531985,
    // latitude: 0,
    // longitude: 0,
  });
  // const MAPS_API = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${state.latitude},${state.longitude}&key=${GOOGLE_MAPS_API_KEY}`;
  const [api, setApi] = useState("");
  const [data, setData] = useState([]);

  const datos = async (lat, lgn) => {
    setApi(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lgn}&key=${GOOGLE_MAPS_API_KEY}`
    );
    await fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0]);
        setData(data.results[0].address_components[3].long_name);
      })
      .catch((error) => {
        console.log(`[datos error]`, error);
      });
  };
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(position) {
    console.log(`[success], latitude ${position.coords.latitude}`);
    console.log(`[success], longitude ${position.coords.longitude}`);
    setState({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });

    console.log(`[success state], latitude ${state.latitude}`);
    console.log(`[success state], longitude ${state.longitude}`);

    datos(position.coords.latitude, position.coords.longitude);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    let go = true;
    navigator.geolocation.getCurrentPosition(success, error, options);
    return () => {
      go = false;
    };
  }, [api]);

  return (
    <div>
      <a href={api}>{data}</a>
    </div>
  );
};

export default Main;
