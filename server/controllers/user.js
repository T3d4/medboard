/* eslint-disable no-undef */
const { handleErrors } = require('../helpers/response')
const { generateJWT } = require('../helpers/utils')
const User = require('../models/User')

const maxAge = 24 * 60 * 60;

const registerUser = async (req, res, next) => {
    const {
        email, firstName, lastName, accountType, password, mln
    } = req.body;

    if (mln) {
        try {
            const user = await User.create({ email, firstName, lastName, accountType, password, mln });

            const token = generateJWT(user._id)
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
            res.status(201).json({ user: user._id })
            return next()
        } catch (err) {
            const error = handleErrors(err);
            res.status(400).json({ error })
        }

    }

    if (!mln) {
        try {
            const user = await User.create({ email, firstName, lastName, accountType, password, mln: null });
            const token = generateJWT(user._id)
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
            res.status(201).json({ user: user._id })
            return next()
        } catch (err) {
            const error = handleErrors(err);
            res.status(400).json({ error })


        }

    }
    return next()
}

module.exports = {
    registerUser
}