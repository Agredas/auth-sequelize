const { Product } = require('../models');
const { create } = require('./CategoryController');

const ProductController = {
    async getAll(req, res) {
        try {
            const products = await Product.findAll();
            res.send(products);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get products' })
        }
    },
    async create(req, res) {
        // Product.create(req.body)
        //     .then(product => res.status(201).send(product))
        //     .catch(error => {
        //         console.error(error);
        //         res.status(500).send({ message: 'There was a problem trying to create the product' })
        //     })
        try {
            const product = await Product.create(req.body);

            res.status(201).send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to create the product' })
        }
    },
}

module.exports = ProductController;