const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');
const { route } = require('./users');

router.get('/', CategoryController.getAll);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update)

module.exports = router;