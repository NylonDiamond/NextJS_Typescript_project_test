var gTranslate = require("google-translate");
// https://nextjs.org/docs/api-routes/introduction
// For an API route to work, you need to export as default a function (a.k.a request handler), which then receives the following parameters:
// req: An instance of http.IncomingMessage, plus some pre-built middlewares you can see here
// res: An instance of http.ServerResponse, plus some helper functions you can see here
export default (req, res) => {
  if (req.method === "POST") {
    const apiKey = process.env.googleTranslateApiKey;
    const translatePromise = function(apikey, textToTranslate) {
      return new Promise((resolve, reject) => {
        const googleTranslate = gTranslate(apikey, {});
        console.log("googleTranslate setup.");
        const textToSend = googleTranslate.translate(
          textToTranslate,
          "zh-CN",
          function(err, translation) {
            // console.log(err);
            // console.log(translation);
            // console.log(translation.translatedText);
            // console.log(req.query);
            // console.log(req.body);
            // console.log(req.cookies);
            console.log(
              "Api Translated to this: " + translation.translatedText
            );
            // this.goodToGo = translation.translatedText;
            resolve(translation.translatedText);
          }
        );
      });
    };
    const textToTranslate = JSON.parse(req.body).textToTranslate;
    console.log("client gave the api " + textToTranslate);
    return translatePromise(apiKey, textToTranslate).then(response => {
      console.log("Finally sending to CLIENT! " + response);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ Translation: response }));
    });
  } else {
    // Handle any other HTTP method
    console.log("No GET stuff here.");
  }
};
