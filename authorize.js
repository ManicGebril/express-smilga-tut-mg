const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'john') {
        req.user = {name:'john', id:3}
        next()
    }
    else {
        res.status(401).send('The Demiurge turns their gaze upon the living...')
    }
    console.log('authorize');
    next()
}

module.exports = authorize