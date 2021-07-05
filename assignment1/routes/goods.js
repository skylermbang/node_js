const express = require("express");
const Coins = require("../schemas/coins");

const router = express.Router();

router.get("/coin", async (req, res, next) => {
  try {
    const { category } = req.query;
    const coins = await Coins.find({ category }).sort("-coinId");
    res.json({ coins: coins }); // array format?
    //res.send(coins);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/coin/:coinId", async (req, res) => {
  const { coinId } = req.params;
  coins = await Coins.findOne({ coinId: coinId });
  res.json({ detail: coins });
  //console.log(coins);
  // res.send(coins);
  // res.render("detail");
});

router.post("/coin", async (req, res) => {
  const { coinId, coinName, coinUrl, category, price } = req.body;
  isExist = await Coins.find({ coinId });
  if (isExist.length == 0) {
    await Coins.create({ coinId, coinName, coinUrl, category, price });
  }
  res.send({ result: "success" });
});

module.exports = router;
