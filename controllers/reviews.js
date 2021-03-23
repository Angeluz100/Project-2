const Home = require("../models/home");

function create(req, res) {
  Home.findById(req.params.id, function (err, home) {
    home.reviews.push(req.body);
    home.save(function (err) {
      res.redirect(`/homes/${home._id}`);
    });
  });
}

module.exports = {
  create,
};
