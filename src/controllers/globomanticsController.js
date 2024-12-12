const HouseModel = require("../models/house");

module.exports = () => {
  const getHouses = (req, res) => {
    (async () => {
      const houses = await HouseModel.find();
      console.log("Houses:", houses);
      res.render("index", { houses });
    })();
  };
  const postAddHouse = (req, res) => {
    res.render("/");
    // /house/add
  };

  const postDeleteHouse = (req, res) => {
    res.render("/");
    // /house/{houseId}/delete
  };

  const getAllBids = (req, res) => {
    const bids = [
      {
        bidder: "Sonia Reading",
        amount: 200000,
      },
      {
        bidder: "Dick Johnson",
        amount: 202400,
      },
      {
        bidder: "Roland",
        amount: 203000,
      },
    ];

    res.render("globomantics/bids", { bids });
    // /house/{houseId}/bids
  };

  const postAddBid = (req, res) => {
    res.render("globomantics/bids");
    // /house/{houseId}/bid/add
  };

  const postDeleteBid = (req, res) => {
    res.render("globomantics/bids");
    ///house/{houseId}/bid/{bidId}/delete
  };

  return {
    getHouses,
    postAddHouse,
    postDeleteHouse,
    getAllBids,
    postAddBid,
    postDeleteBid,
  };
};
