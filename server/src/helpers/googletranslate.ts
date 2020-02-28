const gTranslate = require("google-translate");

interface translationType {
  fromText: string;
  toText: string;
}
type transType = {
  toText: string;
  fromText: string;
}
const doTranslation = async function(
  googleTranslate: any,
  textToTranslate: translationType
) : Promise<string>  {
  return new Promise(function(resolve, reject) {
    try {
      googleTranslate.translate(textToTranslate.fromText, "zh-CN", function(
        _err: any,
        translation: { translatedText: string }
      ) {
        // console.log("Api Translated to this: " + translation.translatedText);
        resolve(translation.translatedText);
      });
    } catch (err) {
      reject(err);
    }
  });
};

// type transType = {
//   toText: string;
//   fromText: string;
// };

export default async function handleTranslation(
  text: translationType
): Promise<transType> {
  const googleTranslate = await gTranslate(
    process.env.GOOGLE_TRANSLATE_API_KEY,
    {}
  );
  const translatedText = await doTranslation(googleTranslate, text);
  return { fromText: text.fromText, toText: translatedText };
}
