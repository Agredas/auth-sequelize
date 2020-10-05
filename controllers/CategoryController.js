const { Category } = require('../models');

const CategoryController = {
    getAll(req, res) {
        Category.findAll() //SELECT * FROM categories
            .then(categories => res.send(categories))
            .catch(error => {
                console.error(error);
                res.status(500).send({ message: 'There was a problem trying to get categories' })
            })
    },
    create(req, res) {
        Category.create(req.body) //INSERT INTO categories 
            .then(category => res.status(201).send(category))
            .catch(error => {
                console.error(error);
                res.status(500).send({ message: 'There was a problem trying to create the category' })
            })
    },
    update(req, res) {
        Category.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(category => res.send(category))
            .catch(error => {
                console.error(error);
                res.status(500).send({ message: 'There was a problem trying to update the category' })
            })
    }
}
module.exports = CategoryController