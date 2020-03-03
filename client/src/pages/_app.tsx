import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "../public/App.css";
import Header from "../components/customheader";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faLanguage,
  faMapMarkerAlt,
  faPizzaSlice,
  faHome,
  faMap,
  faMapMarkedAlt,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";
library.add(
  faLanguage,
  faMapMarkerAlt,
  faPizzaSlice,
  faHome,
  faMap,
  faMapMarkedAlt,
  faChalkboardTeacher
);
import PizzaMouse from "../components/pizzamouse";
import expressImage from "../public/static/0fd21758eb44841974b0dada1f86bf8f.jpg";
const styleBackground = {
  background: expressImage
};
//https://github.com/zeit/next.js/issues/10059
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="all-content">
      {/* <PizzaMouse className="pizza-mouse" /> */}
      <header>
        <Header />
      </header>
      {/* Begin page content */}
      <main
        role="main"
        className="app_main flex-shrink-0"
        style={{ background: `url(${expressImage})` }}>
        <Container style={{ marginTop: "20px" }}>
          <Component {...pageProps} />
        </Container>
      </main>
      <Row className="footer-container">
        <footer className="footer">
          {/* <div className="container"> */}
          <h3>🙅‍♂️️ Powered my Me and a Computer 🖥️</h3>
          {/* </div> */}
        </footer>
      </Row>{" "}
    </div>
  );
}

// /html/body/ytd-app/div/ytd-page-manager/ytd-browse[2]/ytd-two-column-browse-results-renderer/div[1]/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-grid-renderer/div[1]/ytd-grid-video-renderer[1]

// #items > ytd-grid-video-renderer

// document.querySelector("#thumbnail")

// #thumbnail

//. style-scope ytd-grid-renderer > a > href
