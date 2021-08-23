const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRoutes = require('../src/routes/products');
const authRoutes = require('../src/routes/auth');

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.srtHeader('Access-Control-Allow-Origin', '*');
    res.srtHeader('Access-Control-Allow-Methods', 'Get, Post, Put');
    res.srtHeader('Access-Control-Allow-Origin', 'Content-Type, Autorization');
    next();
})

app.use('/v1/customer', productRoutes);
app.use('/v1/auth', authRoutes);


app.listen(4000);
