export default (req, res, next) => {
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['Authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                let token = authorization[1];

                const verified = jwt.verify(token[1], process.env.TOKEN_SECRET)
                return next();
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
}