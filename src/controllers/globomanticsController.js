const HouseModel = require("../models/house");

module.exports = () => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getStreet = () => {
    let street = "";

    switch (randomInt(1, 6)) {
      case 1:
        street = "123 Main Street";
        break;
      case 2:
        street = "456 Elm Street";
        break;
      case 3:
        street = "789 Maple Street";
        break;
      case 4:
        street = "1011 Oak Street";
        break;
      case 5:
        street = "1213 Pine Street";
        break;
      default:
        street = "1415 Cedar Street";
    }
    return street;
  };

  const getCity = () => {
    let city = "";

    switch (randomInt(1, 6)) {
      case 1:
        city = "New York City";
        break;
      case 2:
        city = "Los Angeles";
        break;
      case 3:
        city = "Chicago";
        break;
      case 4:
        city = "Houston";
        break;
      case 5:
        city = "Miami";
        break;
      default:
        city = "Seattle";
    }
    return city;
  };

  const getDescription = () => {
    let description = "";

    switch (randomInt(1, 6)) {
      case 1:
        description =
          "From the outside this house looks old, but wonderful. It has been built with brown bricks and has marble decorations. Tall, squared windows let in plenty of light and have been added to the house in a very symmetric way.";
        break;
      case 2:
        description =
          "The house is equipped with a huge kitchen and one small bathroom, it also has a cozy living room, two bedrooms, a small dining room, a library and a modest garage.";
        break;
      case 3:
        description =
          "The building is shaped like a short U. The two extensions are linked by stylish gardens. The second floor is smaller than the first, which allowed for a roof garden on one side of the house. This floor has a very different style than the floor below.";
        break;
      case 4:
        description =
          "The roof is high and v-shaped and is covered with brown ceramic tiles. One small chimney pokes out the center of the roof. Rows of small windows let in plenty of light to the rooms below the roof. The house itself is surrounded by a well kept garden, with a grass field and flower patches at the edges of the garden.";
        break;
      case 5:
        description =
          "The house is equipped with an average kitchen and one average bathroom, it also has a generous living room, four bedrooms, a small dining room, a study and a roomy garage.";
        break;
      default:
        description =
          "A charming 3-bedroom home nestled in a quiet neighborhood, featuring a spacious backyard perfect for outdoor gatherings. With modern amenities and a cozy interior, this house offers both comfort and convenience. Located just minutes away from local parks and shops, it's an ideal place for families to call home.";
    }
    return description;
  };

  const getHouses = (req, res) => {
    (async () => {
      const houses = await HouseModel.find();
      res.render("index", { houses });
    })();
  };
  const postAddHouse = (req, res) => {
    const priceOptions = [
      250000, 350000, 450000, 500000, 600000, 850000, 1000000, 1200000,
    ];
    const randomPrice =
      priceOptions[Math.floor(Math.random() * priceOptions.length)];

    const newHouse = new HouseModel({
      houseInfo: {
        address: {
          street: getStreet(),
          city: getCity(),
          country: "USA",
        },
        askingPrice: randomPrice,
        description: getDescription(),
        image: null,
      },
      bids: [],
    });

    newHouse
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {
        console.log("Error adding house:", error);
        res.status(500).send("Error adding house");
      });
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
