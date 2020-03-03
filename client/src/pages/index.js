// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./_app";
// import { Row, Image, Jumbotron } from "react-bootstrap";

// // ReactDOM.render(<App />, document.getElementById("root"));
// const Home = () => (
//   <>
//     <Row className="justify-content-md-center">
//       <Jumbotron fluid>
//         <h1> Build with : Nextjs + Expressjs + MongoDb and Typescript</h1>
//       </Jumbotron>
//     </Row>
//     <Row className="justify-content-md-center">
//       <Image
//         src="https://dzone.com/storage/temp/12334613-971.jpg"
//         className="homepage-image"
//         fluid
//         rounded
//       />
//     </Row>
//   </>
// );
// export default Home;

// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./_app";
import { Row, Image, Col, Jumbotron } from "react-bootstrap";
// ReactDOM.render(<App />, document.getElementById("root"));
import nextImage from "../public/static/1280px-Nextjs-logo.svg.png";
import homepageImage from "../public/static/971.jpg";
import expressImage from "../public/static/ExpressJS.png";
// import nodeImage from "../public/static/nodejs.png";
import tsImage from "../public/static/tpyescript.png";
import mongoImage from "../public/static/mongo.png";

const Home = () => (
  <>
    <Row className="justify-content-center">
      <Jumbotron fluid>
        <h1> Built with Nextjs + Expressjs + MongoDb and Typescript</h1>
      </Jumbotron>
    </Row>
    <div className="logo-row">
      <Row>
        <Col>
          <Image src={nextImage} className="logos" fluid rounded />
        </Col>
        <Col>
          <Image
            src={expressImage}
            style={{ marginTop: "40px" }}
            className="logos"
            fluid
            rounded
          />
        </Col>
        <Col>
          <Image
            src={mongoImage}
            style={{ marginTop: "45px" }}
            className="logos"
            fluid
            rounded
          />
        </Col>
        <Col>
          <Image
            src={tsImage}
            style={{ height: "50%" }}
            className="logos"
            fluid
            rounded
          />
        </Col>
      </Row>
    </div>
    <Row className="justify-content-md-center">
      <Image src={homepageImage} className="homepage-image" fluid rounded />
    </Row>
  </>
);
export default Home;
