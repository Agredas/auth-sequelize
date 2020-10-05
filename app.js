const express = require('express');

const usersRouter = require('./routes/users');
const app = express();
const PORT = 3000;

app.use(express.json()); //middleware: parsea el body JSON y evita que req.body sea undefined

app.use('/users', usersRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT));