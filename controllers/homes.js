const Home = require("../models/home");
const Information = require('../models/infomation');

module.exports = {
  index,
  show,
  new: newHome,
  create,
  delete: deleteHome,
  edit,
  update,
};

function index(req, res) {
  Home.find({}, function (err, homes) {
    res.render("homes/index", { title: "All Homes", homes });
  });
}

function show(req, res) {
  Home.findById(req.params.id).populate('feature').exec(function (err, home) {
    Information.find({_id: {$nin: home.feature }}, function(err, informations) {
    res.render("homes/show", { title: "Home Detail", home, informations });
    });
  });
}

function newHome(req, res) {
  res.render("homes/new", { title: "Add Home" });
}

function create(req, res) {
  // remove empty/blank inputs from req.body
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

 


  Home.create(req.body, function (err, home) {
    // one way to handle errors
    if (err) return res.redirect("/homes/new");
    // for now, redirect right back to the "new" view
    res.redirect(`/homes/${ home._id }`);
  });
}




function deleteHome(req, res) {
  Home.findByIdAndDelete(req.params.id, function(err, home) {
      res.redirect('/homes');
  });
}

function edit(req, res) {
  Home.findById(req.params.id, function(err, home) {
      res.render('homes/edit', {
          title: 'Edit Home',
          home,
          homeId: req.params.id,
      });
  });
}

function update(req, res) {
  Home.findByIdAndUpdate(req.params.id, req.body, function(err, home) {
      res.redirect('/homes/' + req.params.id);
  });
}