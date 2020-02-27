const express = require("express");

export default () => {
  const app = express();
  app.use((req, res, next) => {
    console.log("middleware");
    // return next();
    res.status(200)
  });
};
