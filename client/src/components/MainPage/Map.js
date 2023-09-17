import React from "react";
import { GoogleMap, LoadScript, MarkerF, InfoWindowF,  } from "@react-google-maps/api";
import { useState, useMemo } from "react";
// Temporary Location + profile map marker using a random location
const Map = ({friendsList}) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  
  const center = useMemo(() => ({ lat: -33.9182245, lng: 151.2308635 }), []);

  const [hoveredMarker, setHoveredMarker] = useState(null);

  const handleMarkerMouseOver = (friend) => {
    setHoveredMarker(friend);
  };

  const handleMarkerMouseOut = () => {
    setHoveredMarker(null);
  };


  console.log(`This is the ${apiKey}`);
  // const [openModal, setOpenModal] = useState(false);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ height: "100vh", width: "100%" }}
      >

        {friendsList.map((friend) => (
            <MarkerF 
                key={friend.id}
                position={{lat: friend.lat, lng: friend.lng}} 
                icon={{
                    url: friend.pfp,
                    scaledSize: {width: 85, height: 85},
                }}
                label= {{ color: 'white', fontWeight: 'bold', fontSize: '18px', text: friend.name }}
                onClick={() => {}}
                onMouseOver={() => handleMarkerMouseOver(friend)}
                onMouseOut={handleMarkerMouseOut}
            >
            {hoveredMarker === friend && (
                <InfoWindowF>
                    <div>
                        <p>{friend.bio}</p>
                    </div>
                </InfoWindowF>
            )}
            </MarkerF>
        ))}
        
      </GoogleMap>
      {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
    </LoadScript>
  );
};

export default Map;
