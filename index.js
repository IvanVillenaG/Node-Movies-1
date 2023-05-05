const express = require('express');
const dotenv = require('dotenv');
const routerMovie = require('./src/api/routes/movies.routes');

dotenv.config();
const {connect} = require('./src/utils/db');

const app = express();
const PORT = process.env.PORT;

connect();
app.use(express.json());

app.use('/movies', routerMovie);

app.listen(PORT, () => console.log(`server listeing on port ${PORT}`));