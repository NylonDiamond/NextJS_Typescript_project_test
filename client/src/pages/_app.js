import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Layout from "../components/MyLayout";
//https://github.com/zeit/next.js/issues/10059
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
