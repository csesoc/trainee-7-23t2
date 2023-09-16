
import React from "react";
import { GoogleMap, LoadScript, MarkerF, InfoWindowF,  } from "@react-google-maps/api";
import front1 from "../../img/front1.png";
import { useState } from "react";
// Temporary Location + profile map marker using a random location
const Map = () => {

  const center = {
    lat: -33.9182245,
    lng: 151.2308635,
  };

  // const [openModal, setOpenModal] = useState(false);

  return (
    <LoadScript googleMapsApiKey={"AIzaSyCnWzHSvL6l8E8bPMNcDZWVmnybe9C1fEc"}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ height: "100vh", width: "100%" }}
      >
        <MarkerF 
        position={center} 
        icon={{
            url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Circle_%28transparent%29.png",
            scaledSize: {width: 85, height: 85},
        }}
        label= {{ color: 'black', fontWeight: 'bold', fontSize: '14px', text: 'Your text here' }}
        
            />
        
      </GoogleMap>
      {/* {openModal && <Modal closeModal={setOpenModal}/>} */}

    </LoadScript>
  );
  
};

export default Map;