const Information = require('../models/infomation');
const Home = require('../models/home');

function newInformation(req, res) {
    Information.find({}, function(err, informations) {
    res.render('informations/new', {
        title: 'Add Information',
        informations
       })
    });
}
function create(req, res) {
    Information.create(req.body, function(err) {
        res.redirect('/informations/new')
    })
}
function addToFeature(req, res) {
    Home.findById(req.params.id, function(err, home) {
        home.feature.push(req.body.informationId);
        home.save(function(err) {
            res.redirect(`/homes/${home._id}`);
        });
    });
}






module.exports = {
    new: newInformation,
    create,
    addToFeature
};