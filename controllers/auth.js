let jwt = require('jsonwebtoken');
let secret = 'nbvcftyujnbv';

function generateToken(user) {
    let payLoad = {
        email: user.email,
        password: user.password
    }
    return jwt.sign(payLoad, secret);
}

function checkToken(token) {
    return jwt.verify(token, secret);
}

module.exports = { generateToken, checkToken };