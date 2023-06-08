const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require("cors")

mongoose.connect("mongodb+srv://nidhisingh:ERufzsAThZ5xRAJP@cluster0.ikwrh5q.mongodb.net/?retryWrites=true&w=majority");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(cors())
app.use('/api', routes)

app.listen(9000, () => {
    console.log(`Server Started at ${9000}`)
})

