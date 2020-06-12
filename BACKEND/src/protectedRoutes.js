import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = req.header('Authorization').split(' ')
    if (!token) return res.status(401).send('Access deined.')

    try {
        const verified = jwt.verify(token[1], process.env.TOKEN_SECRET)
        let type = token[0]
        if (type == 'Bearer') {
            req.user = verified
            next();
        }
        else {
            return res.status(401).send()
        }
    } catch (err) {
        res.status(400).send('Invalid token.')
    }
}
