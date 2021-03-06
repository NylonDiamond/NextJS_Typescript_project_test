import next from "next";

var gTranslate = require("google-translate");
var morgan = require("morgan");

const doTranslation = async function(googleTranslate, textToTranslate) {

    return new Promise(function(resolve, reject) {
 try{
           googleTranslate.translate(textToTranslate, "zh-CN", function(
        err,
        translation
      ) {
        // console.log("Api Translated to this: " + translation.translatedText);
        resolve(translation.translatedText);
      });}catch{
        reject(err)
      }
    });
 
};

// const doTranslation = async function(googleTranslate, textToTranslate) {
//   return googleTranslate.translate(textToTranslate, "zh-CN", function(
//     err,
//     translation
//   ) {
//     console.log("Api Translated to this: " + translation.translatedText);
//     return translation.translatedText;
//   });
// };

export default async function handle(req, res) {
 try {
    if (req.method === "POST") {
      const apiKey = process.env.googleTranslateApiKey;
      console.log( JSON.parse(req.body))
      const textToTranslate = await JSON.parse(req.body).textToTranslate;
      // console.log("client gave the api " + textToTranslate);
      // console.log("inside doTrans()");
      const googleTranslate = await gTranslate(apiKey, {});
      // console.log("finished gTranslate()");
      const translatedText = await doTranslation(
        googleTranslate,
        textToTranslate
      );
      // const sendPayload = await sendPayload(translatedText);
      // console.log("Finally sending to CLIENT! " + translatedText);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      // return res.end(JSON.stringify({Translation:translatedText}));
      return res.status(200).json({ Translation: translatedText });
    } else {
      console.log("No GET stuff here.");
    }
 } catch (err) {
   next(err)
 }
};

// am
// ar
// eu
// bn
// en-GB
// pt-BR
// bg
// ca
// chr
// hr
// cs
// da
// nl
// en
// et
// fil
// fi
// fr
// de
// el
// gu
// iw
// hi
// hu
// is
// id
// it
// ja
// kn
// ko
// lv
// lt
// ms
// ml
// mr
// no
// pl
// pt-PT
// ro
// ru
// sr
// zh-CN
// sk
// sl
// es
// sw
// sv
// ta
// te
// th
// zh-TW
// tr
// ur
// uk
// vi
// cy
