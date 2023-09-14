import React, { } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";


// Temporary Location + profile map marker using a random location
const Map = () => {

  const center = {
    lat: -33.9173,
    lng: 151.2313,
  };


  /*
  return (
    <LoadScript googleMapsApiKey={""}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ height: "100vh", width: "100vw" }}
      >
      </GoogleMap>
    </LoadScript>
  );
  */
};

export default Map;