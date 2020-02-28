import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Head from "next/head";
import MyLayout from "../components/MyLayout.js";


const Map = () => {
  const [viewport, setViewport] = useState({
    // width: 400,
    // height: 400,
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 4,
  });

  return (
    <div className="container">
      {/* <Head></Head> */}

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.ReactMapMapboxToken}
        onViewportChange={setViewport}
        mapStyle={'mapbox://styles/jesse19skelton/ck72ybq8k0w3y1io45vi78ljk'}
      />
    </div>
  );
};

export default Map;
