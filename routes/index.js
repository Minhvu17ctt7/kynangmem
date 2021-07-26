var express = require("express");
var router = express.Router();
var upload = require("../multer/multer");
const mongoModel = require("../db/model");

/* GET home page. */
router.get("/", async (req, res, next) => {
  if (req.query.mssv) {
    console.log(req.query);
    const profile = await mongoModel.findOne(req.query);
    const list = await mongoModel.find({});
    res.render("profile", { profile, list });
  } else next();
});
router.get("/", async function (req, res, next) {
  const list = await mongoModel.find({});
  res.render("index", { title: "Profile", list });
});
router.get("/profile/create", async (req, res, next) => {
  res.render("createprofile");
});
router.post("/profile/create", upload.single("image"), (req, res) => {
  req.body.image = req.file.filename;
  console.log(req.body);
  mongoModel.create(req.body);
  res.redirect("/?mssv=" + req.body.mssv);
});

module.exports = router;
