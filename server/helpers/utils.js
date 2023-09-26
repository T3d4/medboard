/* eslint-disable no-undef */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const fs = require('fs')

const publicKey = fs.readFileSync('public-key.pem', 'utf-8')
const privateKey = fs.readFileSync('private-key.pem', 'utf-8')


const verifyOptions = {
    expiresIn: "15m",
    algorithm: "RS256"
}

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds)

const generateJWT = (payload) => {
    try {
        const signOptions = {
            expiresIn: "15m",
            algorithm: "RS256"
        }
        const options = signOptions
        if (payload && payload.exp) {
            delete signOptions.expiresIn;
        }
        return jwt.sign({ payload }, privateKey, options)
    } catch (error) {
        console.log(error)
    }
}

const verifyJWT = (payload) => {
    return jwt.verify({ payload }, publicKey, verifyOptions)
}

const hashPassword = (password) => {
    hash = bcrypt.hashSync(password, salt);
    return hash;
}

module.exports = {
    generateJWT,
    verifyJWT,
    hashPassword
}