const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

app.use(cors());
app.options('*', cors())

//Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + 'public/uploads'));
app.use(errorHandler);

//Routes
const categoriesRoutes = require('./routes/categories');
const dailyDigestsRoutes = require('./routes/daily-digests');
const newsChunksRoutes = require('./routes/news-chunks');
const trendsRoutes = require('./routes/trends');
const usersRoutes = require('./routes/users');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/daily-digests`, dailyDigestsRoutes);
app.use(`${api}/news-chunks`, newsChunksRoutes);
app.use(`${api}/trends`, trendsRoutes);
app.use(`${api}/users`, usersRoutes);

//Database
mongoose.connect(process.env.CONNECTION_STRING)
.then( ()=> {
    console.log('Database connection is success.');
})
.catch((err)=> {
    console.log(err);
})

//Server
app.listen(3000, ()=> {
    console.log('server is running in http://localhost:3000');
})