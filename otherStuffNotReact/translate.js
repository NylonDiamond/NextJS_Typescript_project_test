// Imports the Google Cloud client library
// var apiKey = "";

import gTranslate from "google-translate";

// var googleTranslate = gTranslate(apiKey, {});

export default function TranslateWorker() {
  var googleTranslate = gTranslate(apiKey, {});
    googleTranslate.translate("My name is Brandon", "es", function(
      err,
      translation
    ) {
      console.log(translation.translatedText);
    });
 
}

let translatedText = googleTranslate.translate(
  "My name is Brandon",
  "zh-CN",
  function(err, translation) {
    console.log(err);
    console.log(translation);
    // console.log(translation.translatedText);
    return translation.translatedText;
  }
);