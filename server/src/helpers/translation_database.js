import Translations from "../models/translations";

async function saveTranslation(req, res, translated) {
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
}