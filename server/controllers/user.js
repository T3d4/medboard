/* eslint-disable no-undef */
const { handleErrors } = require('../helpers/response')
const { generateJWT } = require('../helpers/utils')
const User = require('../models/User')

const maxAge = 30 * 60;

const registerUser = async (req, res, next) => {
    const {
        email,
        firstName,
        lastName,
        accountType,
        password,
        mln
    } = req.body;

    if (mln) {
        try {
            const user = await User.create({ email, firstName, lastName, accountType, password, mln });

            const token = generateJWT(user._id)
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000, secure: true, sameSite: "lax" })
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
            res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000, secure: true, sameSite: "lax" })
            res.status(201).json({ user: user._id })
            return next()
        } catch (err) {
            const error = handleErrors(err);
            res.status(400).json({ error })


        }

    }
    return next()
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body

    if (!password && !email) {
        return res.status(400).json({ error: "Email and password fields can not be void" })
    }

    if (!email) {
        return res.status(400).json({ error: "Email field can not be void" })

    }

    if (!password) {
        return res.status(400).json({ error: "Password field can not be void" })
    }
    try {
        if (email && password) {
            const user = await User.login(email, password)
            const accessToken = generateJWT(user._id)
            const refreshToken = generateJWT(user._id)
            res.cookie('jwt', refreshToken, { httpOnly: false, maxAge: maxAge * 1000, secure: false });
            res.status(201).json({ user: user._id, accesstkn: accessToken })
            next()
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    return next()
}




module.exports = {
    registerUser,
    loginUser
}