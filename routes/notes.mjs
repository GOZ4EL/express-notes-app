//const util = require("util");
import { default as express } from "express";
import { NotesStore as notes } from "../app.mjs";

export const router = express.Router();

// Add note.
router.get("/add", (req, res, next) => {
  res.render("noteedit", {
    title: "Add a note",
    docreate: true,
    notekey: "",
    note: undefined,
  });
});
