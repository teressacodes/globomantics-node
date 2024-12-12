const express = require("express");
const router = express.Router();

const controller = require("../controllers/globomanticsController");

module.exports = () => {
  const {
    getHouses,
    postAddHouse,
    postDeleteHouse,
    getAllBids,
    postAddBid,
    postDeleteBid,
  } = controller();

  router.route("/").get(getHouses);
  router.route("/").get(postAddHouse);
  router.route("/house/add").get(postAddHouse);
  router.route("/bids").get(getAllBids);
  router.route("/bids").post(postAddBid);
  router.route("/bids").post(postDeleteBid);

  return router;
};
