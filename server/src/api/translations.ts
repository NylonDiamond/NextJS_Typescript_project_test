import { Router } from "express";
import Translations from "../models/translations";
const router = Router();
import handleTranslation from "../helpers/googletranslate";
import translation_database from "../helpers/translation_database";

router.get("/", async (_req: any, res: any, next: any) => {
  try {
    const allTranslations = await Translations.find(
      {},
      {},
      { sort: { createdAt: -1 } }
    ).limit(15);
    res.json(allTranslations);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req: any, res: any, next: any) => {
  try {
    const text = req.body;
    await translation_database.saveTranslation(req, res, text);
    res.json("Success");
  } catch (err) {
    next(err);
  }
});

router.post("/translate", async (req: any, res: any, next: any) => {
  try {
    const translated = await handleTranslation(req.body);
    await translation_database.saveTranslation(req, res, translated);
    res.json(translated);
  } catch (err) {
    err.name === "ValidationError" ? res.status(422) : "";
    next(err);
  }
});

router.delete("/", async (_req: any, res: any, next: any) => {
  try {
    await Translations.remove({});
    res.json({ status: "success" });
  } catch (err) {
    next(err);
  }
});

export default router;
