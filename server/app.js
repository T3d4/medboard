/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const router = require('./routes/user');
const path = require('path')

const app = express();
const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(`${_dirname}/dist`)))
app.use('/api/v1', router)


dbURI = "mongodb+srv://teda:PCg0SssclIEBcWb8@cluster0.fjtsfdo.mongodb.net/medboard"
console.log(_dirname)
console.log('Database connecting...')
mongoose.connect(dbURI)
    .then(
        () => {
            console.log("Database connected!")
            app.listen(5000, () => {
                console.log('The server is running on port 5000')
            })
        }
    )
    .catch((err) => {
        console.log(err)
    })