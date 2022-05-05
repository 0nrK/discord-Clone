const jwt = require("jsonwebtoken")

async function auth(req, res, next) {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1]

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

            req.userData = { email: decodedToken.email };

            next()

        } catch (err) {
            console.log(err);
            res.status(400).json(err)

        }
    }

    if (!token) res.status(401)
}

module.exports = { auth }