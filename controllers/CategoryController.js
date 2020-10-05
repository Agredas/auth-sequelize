const {
    Category,
    Sequelize
} = require('../models');
const Op = Sequelize.Op;
const CategoryController = {
    getAll(req, res) {
        Category.findAll() //SELECT * FROM categories
            .then(categories => res.send(categories))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get categories'
                })
            })
    },
    getById(req, res) {
        Category.findByPk(req.params.id)
            .then(category => res.send(category))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the category'
                })
            })
    },
    getByName(req, res) {
        Category.findAll({ //SELECT * FROM categories WHERE name LIKE '%${req.params.name}%';
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                }
            })
            .then(category => res.send(category))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the category'
                })
            })
    },
    create(req, res) {
        Category.create(req.body) //INSERT INTO categories 
            .then(category => res.status(201).send(category))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to create the category'
                })
            })
    },
    update(req, res) {
        Category.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.send({
                message: 'Category successfully updated'
            }))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to update the category'
                })
            })
    },
    delete(req, res) {
        Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((rowsAffected) => {
                if (!rowsAffected) {
                    return res.send({
                        message: 'Category not found'
                    })
                }
                res.send({
                    message: 'Category successfully removed'
                })
            })
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to remove the category'
                })
            })
    }
}
module.exports = CategoryController