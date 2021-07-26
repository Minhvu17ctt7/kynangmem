var express = require("express");
var router = express.Router();
var upload = require("../multer/multer")
const mongoModel = require("../db/model");


/* GET home page. */
router.get("/", async (req, res, next) => {
  if (req.query.mssv) {
    console.log(req.query);
    const profile = await mongoModel.findOne(req.query);
    const mssvs = await mongoModel.find({});
    res.render("profile", { profile, mssvs });
  } else next();
});
router.get("/", async function (req, res, next) {
  const mssvs = await mongoModel.find({});
  res.render("index", { title: "Profile", mssvs });
});
router.get("/profile/create", async (req, res, next) => {
  res.render("createprofile");
});
router.post("/profile/create", upload.single('image'),(req, res) => {
  // const {name, email, skype,phone, age,mssv} = req.body;
  ;
  req.body.image = req.file.filename;
  console.log(req.body)
  mongoModel.create(req.body);
  res.redirect("/?mssv=" + req.body.mssv);
});

module.exports = router;
