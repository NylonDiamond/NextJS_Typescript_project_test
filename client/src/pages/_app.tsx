// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import MyLayout from "../components/MyLayout";
// //https://github.com/zeit/next.js/issues/10059
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <MyLayout>
//       <Component {...pageProps} />
//     </MyLayout>
//   );
// }

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../App.css";
import Header from "../components/Header";

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
library.add(
  faLanguage,
  faMapMarkerAlt,
  faPizzaSlice,
  faHome,
  faMap,
  faMapMarkedAlt,
  faChalkboardTeacher
);

//https://github.com/zeit/next.js/issues/10059
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        {/* Fixed navbar */}
        {/* <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/">
            Fixed navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabIndex={-1}
                  aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </nav> */}
        <Header />
      </header>
      {/* Begin page content */}
      <main
        role="main"
        style={{ backgroundColor: "#F3E9D2" }}
        className="flex-shrink-0">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
      <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container">
          Powered my really important computer stuff.
        </div>
      </footer>
      <style jsx>{`main > .container {
  /* padding: 60px 15px 0;  */
  display: flex;
  min-height: 90vh;
  flex-direction: column;
}
.Site-content {
  flex: 1;
}
::-webkit-scrollbar {
    width: 12px;
}
>`}</style>
    </>
  );
}
