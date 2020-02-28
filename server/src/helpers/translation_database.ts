import Translations from "../models/translations";

// interface translationType {
//   fromText: string;
//   toText: string;
// }

//interface
interface translationType {
  toText: string;
  fromText: string;
}

// type alias
// type transType = {
//   toText: string;
//   fromText: string;
// }

async function saveTranslation(_req: any, res: any, translated: translationType| any) {
  try {
    const translation = new Translations(translated);
    const createdEntry = await translation.save();
    return createdEntry;
  } catch (err) {
    err.name === "ValidationError" ? res.status(422) : "";
    throw err;
  }
}

export default {
  saveTranslation
};
