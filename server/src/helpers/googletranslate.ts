var gTranslate = require("google-translate");


const doTranslation = async function(
  googleTranslate: any,
  textToTranslate: any
) {
  return new Promise(function(resolve, reject) {
    try {
      googleTranslate.translate(textToTranslate, "zh-CN", function(
        _err: any,
        translation: any
      ) {
        // console.log("Api Translated to this: " + translation.translatedText);
        resolve(translation.translatedText);
      });
    } catch (err) {
      reject(err);
    }
  });
};

export default async function handleTranslation(text: string) {
  const googleTranslate = await gTranslate(process.env.GOOGLE_TRANSLATE_API_KEY, {});
  const translatedText = await doTranslation(googleTranslate, text);
  return { fromText: text, toText: translatedText };
}
