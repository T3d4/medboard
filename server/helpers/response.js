/* eslint-disable no-undef */
const handleErrors = (err) => {
    console.log(err.message, err.code)

    const errors = { email: "", password: "" };

    if (err.message == "incorrect email") {
        errors.email = 'email is not registered'
    }

    if (err.message == "incorrect password") {
        errors.password = 'password is incorrect'
    }

    if (err.code == 11000) {
        errors.email = 'email is already registered'
    }

    return errors
}

const sendResponse = ({ res, statusCode = 200, message = 'success', responseBody }) => {

    res.status(statusCode).send({
        data: responseBody,
        status: true,
        message
    })

}

const sendError = ({
    res, statusCode = 500, message = 'failed', responseBody
}) => {
    res.status(statusCode).send({
        data: responseBody,
        status: false,
        message
    })
}

module.exports = {
    sendError, sendResponse, handleErrors
}