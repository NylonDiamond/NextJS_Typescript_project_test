import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import translationRoute from "./api/translations";
import dotEnv from 'dotenv'
dotEnv.config()
import middlewares from "./middlewares";
// const logs = require('./api/logs');

const app = express();

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/temp'

mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// starting middlewares here VVV
app.enable("trust proxy"); // needed for rate limiting by Client IP

// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// shows this "[26/Feb/2020:00:03:08 +0000] "GET / HTTP/1.1" 304" for each request
app.use(morgan("common"));

// secure you app a bit more from hackers.
app.use(helmet());

app.use(
  // only request from this origin can return back
  cors({ origin: process.env.CORS_ORIGIN })
);

// json BODY-PARSER for getting the body of REST calls to our API
app.use(express.json());

// index route
app.get("/", (_req:any, res:any) => {
  res.json({ message: "Hello World!" });
});

// main routes, after middlewares, before error middleware
app.use("/api/translations", translationRoute);

// you want your error handling middleware to be the LAST Middleware to be registered. Anything that calls next() will come to these. Should only be calling next() in a route if we want to do something before sending a response back IN the route OR for errors.
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
 