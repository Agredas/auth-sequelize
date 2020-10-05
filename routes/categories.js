const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');

router.get('/', CategoryController.getAll);
router.get('/name/:name', CategoryController.getByName)
router.get('/:id', CategoryController.getById);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);
module.exports = router;