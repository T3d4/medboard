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
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(`${_dirname}/dist`)))
app.use('/api/v1', router)


dbURI = "mongodb+srv://teda:PCg0SssclIEBcWb8@cluster0.fjtsfdo.mongodb.net/medboard"
console.log(_dirname)
console.log('Database connecting...')
mongoose.connect(dbURI)
    .then(
        () => {
            console.log("Database connected!")
            app.listen(process.env.PORT || 5000, () => {
                console.log(`The server is running on port ${process.env.PORT} || 5000`)
            })
        }
    )
    .catch((err) => {
        console.log(err)
    })

// The "catchall" handler: for any request that doesn't
// match one above, send back Vue's index.html file.
app.get('/*', (req, res) => {
    res.sendFile(path.join(`${_dirname}/dist/index.html`))
})