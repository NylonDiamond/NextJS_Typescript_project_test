import Head from "next/head";
import MyLayout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import react, { Component, Reducer } from "react";
import TranslationsAPI from "../otherStuffNotReact/API";
import _ from "lodash";
import { isThrowStatement } from "typescript";
import React from "react";

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

function fetcher(url: RequestInfo) {
  return fetch(url).then(r => r.json());
}

// typescript stuff for this class and above : https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly
// https://nextjs.org/docs/basic-features/data-fetching
class translate extends react.Component<{}, MyState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      input: "",
      submit: "",
      isLoaded: false,
      error: null,
      translatedText: "",
      allTrans: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: { value: any } }) {
    this.setState({
      input: event.target.value
    });
  }

  // Next.js renders pages on server than sends them to the browser. getInitialProps is on server side, useEffect is on client side/browser. In your example getInitialProps triggers fetching on server. But useEffect fetches data on browser. You can fetch data before page loads via getInitialProps.But with useEffect fetching after page loading.
  async componentDidMount() {
    await this.updatePriorTrans();
  }

  async updatePriorTrans() {
    try {
      const data = await TranslationsAPI.getPreviousTranslations();
      const liTrans = data.map(
        (item: {
          _id: react.ReactText;
          fromText: react.ReactNode;
          toText: react.ReactNode;
        }) => (
          <li key={item._id}>
            {item.fromText} >>> {item.toText}
          </li>
        )
      );
      this.setState({ allTrans: liTrans });
    } catch (err) {
      console.log(err);
    }
  }

  handleDelete = async () =>{
    try {
      const response = await TranslationsAPI.deleteAllTranslations();
      if(response.status === "success"){
        await this.updatePriorTrans();
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleSubmit = async () => {
    try {
      const data = await TranslationsAPI.doTranslation({
        textToTranslate: this.state.input
      });
      this.setState(() => {
        return {
          translatedText: data,
          input: ''
        };
      });
      await this.updatePriorTrans();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container">
        {/* <Head></Head> */}
        <MyLayout />
        <textarea
          style={{ height: 100, width: 333 }}
          value={this.state.input}
          onChange={this.handleChange}
        ></textarea>
        <button onClick={this.handleSubmit}>Translate!</button>
        <h1>Translated state text: {this.state.translatedText}</h1>
        <br />
        <p>Recent Translations: <span className="pull-right"><button onClick={this.handleDelete} type="button" className="btn btn-danger">Delete All</button></span> </p>

        <ul>{this.state.allTrans}</ul>
      </div>
    );
  }
}

export default translate;
