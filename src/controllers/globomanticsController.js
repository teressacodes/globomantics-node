module.exports = () => {
  const getHouses = (req, res) => {
    const houses = [
      {
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000,
      },
      {
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000,
      },
      {
        address: "Grote Hof 12, Amsterdam",
        country: "The Netherlands",
        price: 200500,
      },
      {
        address: "Meel Kade 321, The Hague",
        country: "The Netherlands",
        price: 259500,
      },
      {
        address: "Oude Gracht 32, Utrecht",
        country: "The Netherlands",
        price: 400500,
      },
    ];

    res.render("index", { houses });
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
