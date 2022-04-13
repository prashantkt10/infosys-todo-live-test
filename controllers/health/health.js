const healthCheck = (req, res, next) => {
    return res.send('ok');
}

module.exports = {
    healthCheck
}