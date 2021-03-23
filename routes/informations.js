const express = require('express');
const router = express.Router();
const informationsCtrl = require('../controllers/informations');

router.get('/informations/new', informationsCtrl.new);
router.post('/informations', informationsCtrl.create);
router.post('/homes/:id/informations', informationsCtrl.addToFeature);

module.exports = router;