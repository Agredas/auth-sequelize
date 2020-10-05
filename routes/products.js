const router = require('express').Router();
const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.getAll);
router.post('/', ProductController.create);

module.exports = router;