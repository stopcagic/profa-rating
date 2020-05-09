import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) res.status(401).send('Access deined.')

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next();

    } catch (err) {
        res.status(400).send('Invalid token.')
    }
}
