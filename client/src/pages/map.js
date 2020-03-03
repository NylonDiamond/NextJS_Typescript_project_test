import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Head from "next/head";
import { Row, Col } from "react-bootstrap";

const Map = () => {
  const [viewport, setViewport] = useState({
    // width: 400,
    // height: 400,
    width: "100vw",
    height: "90vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 4
  });

  return (
    <>
      <Row>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.ReactMapMapboxToken}
          onViewportChange={setViewport}
          mapStyle={"mapbox://styles/jesse19skelton/ck72ybq8k0w3y1io45vi78ljk"}
        />
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 9 }}>
          {" "}
          <h6 style={{ alignItems: "right" }}>* Using Map Box API</h6>
        </Col>
      </Row>
    </>
  );
};

export default Map;
