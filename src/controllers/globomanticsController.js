module.exports = () => {
  const postAddHouse = (req, res) => {
    res.render("/");
    // /house/add
  };

  const postDeleteHouse = (req, res) => {
    res.render("/");
    // /house/{houseId}/delete
  };

  const getAllBids = (req, res) => {
    res.render("globomantics/bids");
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
    postAddHouse,
    postDeleteHouse,
    getAllBids,
    postAddBid,
    postDeleteBid,
  };
};
