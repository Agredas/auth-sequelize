const express = require('express');
const chalk = require('chalk');
const bcrypt = require('bcryptjs');
const {
    User
} = require('./models');
const app = express();
const PORT = 3000;

app.use(express.json()); //middleware: parsea el body JSON y evita que req.body sea undefined

app.post('/signup', async(req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 9);
        const user = await User.create(req.body);
        res.status(201).send(user)
    } catch (error) {
        console.error(chalk.red(error))
        res.status(400).send({
            message: 'There was a problem trying to register the user, check the fields',
            error
        })
    }
});

app.post('/login', (req, res) => {
    User.findOne({ // SELECT * FROM users WHERE email = ${req.body.email};
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                });
            }
            return bcrypt.compare(req.body.password, user.password)
        })
        .then(isMatch => {
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                });
            }
            res.send({
                message: 'Succesfully logged In'
            })
        })
});

app.listen(PORT, () => console.log('server running on port ' + PORT));