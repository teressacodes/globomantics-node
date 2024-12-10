const express = require("express");
const router = express.Router();

const controller = require("../controllers/globomanticsController");

module.exports = () => {
  const {
    postAddHouse,
    postDeleteHouse,
    getAllBids,
    postAddBid,
    postDeleteBid,
  } = controller();

  router.route("/").post(postAddHouse);
  router.route("/").post(postDeleteHouse);
  router.route("/bids").get(getAllBids);
  router.route("/bids").post(postAddBid);
  router.route("/bids").post(postDeleteBid);

  return router;
};
