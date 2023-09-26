/* eslint-disable no-undef */
const { Schema } = require("mongoose")
const mongoose = require('mongoose')
const { isEmail } = require("validator")
const { hashPassword } = require("../helpers/utils")

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true,
    },
    mln: {
        type: String,
        minlength: [8, 'MLN is less than 8 characters'],
        maxlength: [8, 'MLN is greater than 8 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]

    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Minimum password length is 8 characters'],
    },

})

userSchema.pre('save', async function (next) {
    this.password = await hashPassword(this.password)
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;