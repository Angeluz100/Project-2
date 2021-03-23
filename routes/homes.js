const express = require('express');
const router = express.Router();
const homesCtrl = require('../controllers/homes');

router.get('/', homesCtrl.index);
router.get('/new', homesCtrl.new);
router.get('/:id', homesCtrl.show);
router.post('/', homesCtrl.create);

router.delete('/:id', homesCtrl.delete);
router.get('/:id/edit', homesCtrl.edit);
router.put('/:id', homesCtrl.update);

module.exports = router;