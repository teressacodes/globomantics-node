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
  router.route("/house/add").get(postAddHouse);
  router.route("/house/:houseId/delete").post(postDeleteHouse);
  router.route("/house/:houseId/bids").get(getAllBids);
  router.route("/house/:houseId/bid/add").post(postAddBid);
  router.route("/house/:houseId/bid/:bidId/delete").post(postDeleteBid);

  return router;
};
