const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');

require('dotenv').config();


const port = process.env.PORT || 3001;

const app = express();


app.use(logger('dev'));
app.use(express.static("build"));


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.log(err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/routes/api', routes);

mongoose.connect(process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err)
    );



app.listen(port, () => { console.log('Server running on port ' + port) });