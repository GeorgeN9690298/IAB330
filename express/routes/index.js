var express = require("express");
var router = express.Router();

/* GET ALL */
router.get("/all", function (req, res) {
  req.db.from;
});

/* GET timestamp */
router.get("/timestamp", function (req, res) {
  req.db
    .from("brisbane_gp")
    .select("timestamp")
    .then((rows) => {
      res.json({ Data: rows });
    })
    .catch((err) => {
      console.log(err);
      res.json({ Error: true, Message: err });
    });
});

module.exports = router;
