import * as express from "express";
import { NotesStore as notes } from "../app.mjs";
export const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const keyList = await notes.keyList();
    const keyPromises = keyList.map((key) => {
      return notes.read(key);
    });
    const notelist = await Promise.all(keyPromises);
    res.render("index", { title: "Notes", notelist });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
