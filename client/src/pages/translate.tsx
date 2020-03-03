import MyLayout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import react, { useState, useEffect } from "react"; // useState is a react HOOK! woo
import TranslationsAPI from "../otherStuffNotReact/API";
import _ from "lodash";
import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import PreviousTranslations from "../components/PreviousTranslations";
import {
  fas,
  faTrashAlt,
  faLanguage,
  faGlobeAmericas
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// interface MyProps {

// }

interface MyState {
  input: string;
  submit: string;
  isLoaded: boolean;
  error: boolean;
  translatedText: string;
  allTrans: [];
}

// typescript stuff for this class and above : https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly
// https://nextjs.org/docs/basic-features/data-fetching
const translate = props => {
  // constructor(props: Readonly<{}>) {
  //   super(props);
  //   this.state = {
  //     input: "",
  //     submit: "",
  //     isLoaded: false,
  //     error: null,
  //     translatedText: "",
  //     allTrans: []
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // react hook that gives you the state and a function to update the state.
  // const [state, setState] = useState({
  //   input: "",
  //   submit: "",
  //   translatedText: "",
  //   allTrans: []
  // });
  // OLD WAY OF DOING IT ABOVE
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [allTrans, setAllTrans] = useState([]);
  const [previousTranslations, setPreviousTranslations] = useState([]);

  // const handleChange = (event: { target: { value: any } }) => {
  //   setState({ ...state, input: event.target.value });
  // }; // OLD WAY OF DOING IT ABOVE
  // const handleChange = (event: { target: { value: any } }) => {
  //   setInput(event.target.value);
  // };

  // Next.js renders pages on server than sends them to the browser. getInitialProps is on server side, useEffect is on client side/browser. In your example getInitialProps triggers fetching on server. But useEffect fetches data on browser. You can fetch data before page loads via getInitialProps.But with useEffect fetching after page loading.
  // const componentDidMount = async () => {
  //REPLACE THIS with useEffect() <<<<<<< NEW REACT HOOK FOR COMPOINENTDidMOUNT()!!!!!!!!!!!!!!
  // const componentDidMount = async () => {
  //   await updatePriorTrans();
  // };
  //AFTER the component has been rendered (show on screen) to the DOM, this will trigger/run. It also works a lil different. It runs more than once unlike componentDidMount(). It runs after any re-render by default (when props or state changes you'll get a re-render).
  useEffect(() => {
    updatePriorTrans(); // call api
  }, [translatedText]); // second parameter is empty array. Tells to only run again when 'empty array state changes'. Never will happen

  const updatePriorTrans = async () => {
    try {
      const previousTranslations = await TranslationsAPI.getPreviousTranslations();
      const liTrans = previousTranslations.map(
        (item: {
          _id: react.ReactText;
          fromText: react.ReactNode;
          toText: react.ReactNode;
        }) => (
          <li className="each-trans" key={item._id}>
            <p
              style={{
                display: "inline",
                color: "#c028d4"
              }}>
              {item.fromText}
            </p>
            {"  "}
            <FontAwesomeIcon icon={faGlobeAmericas} />
            {"  "}
            <p
              style={{
                display: "inline",
                color: "#39fc03"
              }}>
              {item.toText}
            </p>
          </li>
        )
      );
      setPreviousTranslations(liTrans);
    } catch (err) {
      console.log(err);
    }
  };

  // // componentDidUpdate(prevProps){
  // //   this.fetch();
  // // }
  // useEffect(() => {
  //   updatePriorTrans();
  // }, [translatedText]);

  const handleDelete = async () => {
    try {
      const response = await TranslationsAPI.deleteAllTranslations();
      if (response.status === "success") {
        await updatePriorTrans();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      event.stopPropagation();
      const data = await TranslationsAPI.doTranslation({
        fromText: input,
        toText: ""
      });
      setInput("");
      setTranslatedText(data.toText);
      await updatePriorTrans();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <Head></Head> */}
      <Row className="justify-content-md-center">
        <Col>
          {/* https://stackoverflow.com/questions/33211672/how-to-submit-a-form-using-enter-key-in-react-js */}
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="123">
              {/* <Form.Label>Example textarea</Form.Label> */}
              <Form.Control
                as="textarea"
                rows="6"
                className="translate-box"
                value={input}
                onChange={e => setInput(e.currentTarget.value)}
                placeholder="Translate something..."
              />
              <Button type="submit" variant="success">
                <span>
                  Translate <FontAwesomeIcon icon={faLanguage} />
                </span>
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="123">
              {/* <Form.Label>Example textarea</Form.Label> */}
              <Form.Control
                placeholder="Translation will show here"
                as="textarea"
                rows="6"
                className="translate-box"
                readOnly={true}
                value={translatedText}
              />
              <span className="pull-right">
                <Button variant="danger" onClick={handleDelete}>
                  <span>
                    Delete All <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </Button>
              </span>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <hr />

      <div className="old-translations">
        <Row className="justify-content-md-center">
          {" "}
          {/* <h3 style={{ alignItems: "center" }}>Previous Translations</h3> */}
          <ul style={{ alignItems: "center" }}>
            {/* {allTrans} */}
            {/* conditional rendering depending on array length */}
            {previousTranslations.length === 0 && <p>"No old translations!"</p>}
            {previousTranslations}
            {/* <PreviousTranslations previousTranslations={previousTranslations} /> */}
          </ul>
        </Row>
      </div>
    </>
  );
};

export default translate;
