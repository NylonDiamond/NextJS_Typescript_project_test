import Head from "next/head";
import MyLayout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import React from "react";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

// https://nextjs.org/docs/basic-features/data-fetching
class translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
      isLoaded: false,
      error: null,
      translatedText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit = async () => {
    // Async MUST have await as first arguments!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await fetch("http://localhost:3000/api/translate", {
      method: "POST",
      body: JSON.stringify({"textToTranslate": this.state.input})
    });
    const data = await res.json();
    console.log("The data is : " + data.Translation);
    // const temp = await console.log(
    // "Translated Text TO the client : " + data.translatedText
    // );
    this.setState({ translatedText: data.Translation });

    // const transText = data?.translatedText;
    // console.log("trans text was : " + transText);
    // if (transText != "") {
    //   this.setState({
    //     isLoaded: true,
    //     translatedText: transText
    //   });
    // }

    // fetch("http://localhost:3000/api/translate", {method: "GET"})
    // .then(res => res.json())
    // .then(
    //   result => {
    //     console.log("There was NOT an error. In the component.")
    //     console.log(
    //       "API Response in JSON is : " + result + " OR " + result.items
    //     );
    //     this.setState({
    //       isLoaded: true,
    //       items: result.items,
    //       translatedText: result.translatedText
    //     });
    //   },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   error => {
    //     console.log('There was an errror llllllllll')
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // );
    // console.log("end of that");
  };
  // Good place for API stuff

  render() {
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <div>
        <Head>
          <MyLayout />
        </Head>
        <textarea
          style={{ height: 100, width: 333 }}
          value={this.state.input}
          onChange={this.handleChange}
        ></textarea>
        <button onClick={this.handleSubmit}>Translate!</button>
        <h1>Translated state text: {this.state.translatedText}</h1>
        {/* <h2>Translated props text: {this.props.translatedText}</h2> */}
        <h3>Input state: {this.state.input}</h3>
      </div>
    );
    // }
  }
}

// translate.getInitialProps = async function() {
//   const res = await fetch("http://localhost:3000/api/translate", {method: "POST", body: JSON.stringify('')});
//   const data = await res.json();
//   console.log(data);
//   return {
//     translatedText: data.translatedText
//   };
// };

export default translate;
