var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  req.db
    .from("brisbane_gp")
    .select("serialid")
    .then((rows) => {
      res.json({ Data: rows });
    })
    .catch((err) => {
      console.log(err);
      res.json({ Error: true, Message: "Error in MySQL query" });
    });
});

module.exports = router;
