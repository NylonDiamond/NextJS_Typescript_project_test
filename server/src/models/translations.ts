// let Mongoose = require("mongoose");
import mon from 'mongoose'
import _ from 'lodash'

let Schema = mon.Schema;

const requiredString = { type: String, required: true };
// const defaultDate = {};

// https://mongoosejs.com/docs/guide.html
// Create our simple Schema
let translationSchema = new Schema(
  {
    //   title: { type: String, default: "" },
    fromText: requiredString,
    toText: requiredString
  },
  {
    timestamps: true
  }
); // <<< timestamps for each record automatically, cool!

// export this model, now we have find, update, get and other methods.
const Translation = mon.model("Translation", translationSchema);

export default Translation;
